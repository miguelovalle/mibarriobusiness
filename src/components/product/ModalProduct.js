import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  VStack,
  Container,
  HStack,
  useToast,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { BiDollar } from 'react-icons/bi';
import { useQueryClient } from 'react-query';
import { useMutateReplaceProduct } from '../hooks/productHooks';
import { useNavigate } from 'react-router-dom';
import { AlertDelete } from './AlertDelete';
import { ModalUploadFile } from './ModalUploadFile';
import { ModalAggregates } from './ModalAggregates';

export const ModalProduct = ({
  product = null,
  isOpen,
  onClose,
  id,
  categories,
  setListFiltered,
}) => {
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const [isOpenUp, setisOpenUp] = useState(false);
  const [isOpenAgg, setisOpenAgg] = useState(false);
  const [aggList, setaggList] = useState([]);

  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      enabled: "",
    },
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutateReplaceProduct(product?._id);
  const navigate = useNavigate();
  //TODO usar una herramienta de generacion de nombres en el server
  const imgName = sessionStorage.getItem('imgName');

  useEffect(() => {
    setValue('name', product?.name);
    setValue('category', product?.category);
    setValue('description', product?.description);
    setValue('price', product?.price);

    setValue('enebled', product?.enabled);
  }, [product, setValue]);

  const onSubmit = e => {
    const editProduct = {
      category: e.category,
      name: e.name,
      description: e.description,
      price: e.price,
      enabled: "no",
      logo: imgName,
      commerce: id,
      aggregates: aggList,
    };
    mutate(editProduct, {
      onError: () => {
        toast({
          title: "No se pudo actualizar el producto. Intente más tarde",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      },
      onSuccess: () => {
        const { products } = queryClient.getQueryData(['listproducts']);
        setListFiltered(products);
        toast({
          title: 'El producto fué agregado a la Base de Datos',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        navigate('/ds/dashboard');
      },
    });
  };

  const HandleDelete = () => {
    setisOpenDialog(true);
  };

  const handleLogo = () => {
    setisOpenUp(true);
  };

  const HandleAgg = () => {
    setisOpenAgg(true);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Definición de Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} w="full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                  <FormControl isInvalid={errors.name}>
                    <Input
                      type="text"
                      placeholder="Nombre del Producto"
                      borderColor="gray.400"
                      {...register("name", {
                        required: "Campo Obligatorio",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.description}>
                    <Textarea
                      borderColor="gray.400"
                      placeholder="Descripción del Producto"
                      {...register("description", {
                        required: "Campo Obligatorio",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.description && errors.description.message}
                    </FormErrorMessage>
                  </FormControl>

                  <Select placeholder="Categoria" {...register("category")}>
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {" "}
                        {item}{" "}
                      </option>
                    ))}
                  </Select>

                  <FormControl isInvalid={errors.price}>
                    <InputGroup>
                      <InputLeftAddon
                        pointerEvents="none"
                        children={<BiDollar />}
                      />
                      <Input
                        type="text"
                        placeholder="Si no se cobra, digite 0"
                        borderColor="gray.400"
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Campo Obligatorio",
                          },
                          min: {
                            value: 0,
                            message: "El valor no puede ser negativo",
                          },
                        })}
                      />
                    </InputGroup>

                    <FormErrorMessage>
                      {errors.price && errors.price.message}
                    </FormErrorMessage>
                  </FormControl>

                  <HStack>
                    <Button colorScheme="blue" mr={3} onClick={HandleAgg}>
                      Agregados
                    </Button>{" "}
                    <Button colorScheme="blue" mr={3} onClick={HandleDelete}>
                      Eliminar
                    </Button>
                    <Button colorScheme="blue" mr={3} onClick={handleLogo}>
                      Logo
                    </Button>
                    <Button colorScheme="blue" mr={3} type="submit">
                      Registrar
                    </Button>
                  </HStack>
                </VStack>
              </form>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <ModalUploadFile
              isOpenUp={isOpenUp}
              setisOpenUp={setisOpenUp}
              product={product}
            />
            <AlertDelete
              isOpenDialog={isOpenDialog}
              setisOpenDialog={setisOpenDialog}
              productId={product?._id}
              setListFiltered={setListFiltered}
            />
            <ModalAggregates
              isOpenAgg={isOpenAgg}
              setisOpenAgg={setisOpenAgg}
              aggregates={aggList}
              setaggList={setaggList}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
