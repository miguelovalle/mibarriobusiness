<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from 'react';
>>>>>>> incluye listas de agregados
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
<<<<<<< HEAD
  ModalOverlay,
=======
>>>>>>> incluye listas de agregados
  Select,
  Textarea,
  VStack,
  Container,
  HStack,
  useToast,
<<<<<<< HEAD
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { BiDollar } from "react-icons/bi";
import { useQueryClient } from "react-query";
import { useMutateReplaceProduct } from "../hooks/productHooks";
import { AlertDelete } from "./AlertDelete";
import { ModalUploadFile } from "./ModalUploadFile";
import { ModalAggregates } from "./ModalAggregates";
=======
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { BiDollar } from 'react-icons/bi';
import { useQueryClient } from 'react-query';
import { useMutateReplaceProduct } from '../hooks/productHooks';
import { useNavigate } from 'react-router-dom';
import { AlertDelete } from './AlertDelete';
import { ModalUploadFile } from './ModalUploadFile';
import { ModalAggregates } from './ModalAggregates';
>>>>>>> incluye listas de agregados

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
<<<<<<< HEAD
      name: "",
      category: "",
      description: "",
      price: "",
      enabled: "",
=======
      name: '',
      category: '',
      description: '',
      price: '',
      enabled: '',
>>>>>>> incluye listas de agregados
    },
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutateReplaceProduct(product?._id);
<<<<<<< HEAD

  //TODO usar una herramienta de generacion de nombres en el server
  const imgName = sessionStorage.getItem("imgName");

  useEffect(() => {
    setValue("name", product?.name);
    setValue("category", product?.category);
    setValue("description", product?.description);
    setValue("price", product?.price);
    setValue("enebled", product?.enabled);
    //    setaggList(product?.aggregates);
  }, [product, setValue, aggList]);

  const onSubmit = (e) => {
    console.log("luego de registrar nueva lista", aggList);
    const aggValue = product?.aggregates;
    aggValue && setaggList(product?.aggregates);
=======
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
>>>>>>> incluye listas de agregados
    const editProduct = {
      category: e.category,
      name: e.name,
      description: e.description,
      price: e.price,
<<<<<<< HEAD
      enabled: "no",
=======
      enabled: 'no',
>>>>>>> incluye listas de agregados
      logo: imgName,
      commerce: id,
      aggregates: aggList,
    };
    mutate(editProduct, {
      onError: () => {
        toast({
<<<<<<< HEAD
          title: "No se pudo actualizar el producto. Intente más tarde",
          status: "warning",
=======
          title: 'No se pudo actualizar el producto. Intente más tarde',
          status: 'warning',
>>>>>>> incluye listas de agregados
          duration: 9000,
          isClosable: true,
        });
      },
      onSuccess: () => {
<<<<<<< HEAD
        const { products } = queryClient.getQueryData(["listproducts"]);
        setListFiltered(products);
        toast({
          title: "El producto fué agregado a la Base de Datos",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
=======
        const { products } = queryClient.getQueryData(['listproducts']);
        setListFiltered(products);
        toast({
          title: 'El producto fué agregado a la Base de Datos',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        navigate('/ds/dashboard');
>>>>>>> incluye listas de agregados
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
<<<<<<< HEAD
=======
    const aggValue = product?.aggregates;
    aggValue === undefined ? setaggList([]) : setaggList(aggValue);
>>>>>>> incluye listas de agregados
    setisOpenAgg(true);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
<<<<<<< HEAD
        <ModalOverlay />
=======
>>>>>>> incluye listas de agregados
        <ModalContent>
          <ModalHeader>Definición de Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
<<<<<<< HEAD
            <Flex direction={"column"} w="full">
=======
            <Flex direction={'column'} w="full">
>>>>>>> incluye listas de agregados
              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                  <FormControl isInvalid={errors.name}>
                    <Input
                      type="text"
                      placeholder="Nombre del Producto"
                      borderColor="gray.400"
<<<<<<< HEAD
                      {...register("name", {
                        required: "Campo Obligatorio",
=======
                      {...register('name', {
                        required: 'Campo Obligatorio',
>>>>>>> incluye listas de agregados
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
<<<<<<< HEAD
                      {...register("description", {
                        required: "Campo Obligatorio",
=======
                      {...register('description', {
                        required: 'Campo Obligatorio',
>>>>>>> incluye listas de agregados
                      })}
                    />
                    <FormErrorMessage>
                      {errors.description && errors.description.message}
                    </FormErrorMessage>
                  </FormControl>

<<<<<<< HEAD
                  <Select placeholder="Categoria" {...register("category")}>
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {" "}
                        {item}{" "}
=======
                  <Select placeholder="Categoria" {...register('category')}>
                    {categories.map((item, index) => (
                      <option key={index} value={item}>
                        {' '}
                        {item}{' '}
>>>>>>> incluye listas de agregados
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
<<<<<<< HEAD
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Campo Obligatorio",
                          },
                          min: {
                            value: 0,
                            message: "El valor no puede ser negativo",
=======
                        {...register('price', {
                          required: {
                            value: true,
                            message: 'Campo Obligatorio',
                          },
                          min: {
                            value: 0,
                            message: 'El valor no puede ser negativo',
>>>>>>> incluye listas de agregados
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
<<<<<<< HEAD
                    </Button>{" "}
=======
                    </Button>{' '}
>>>>>>> incluye listas de agregados
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
