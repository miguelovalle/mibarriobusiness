<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import { useEffect } from 'react';
>>>>>>> incluye listas de agregados
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  Container,
  Flex,
  useToast,
<<<<<<< HEAD
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { MdPostAdd, MdDeleteSweep } from "react-icons/md";
=======
} from '@chakra-ui/react';

import { useForm, useFieldArray } from 'react-hook-form';

import { AiFillFileAdd, AiFillDelete } from 'react-icons/ai';
>>>>>>> incluye listas de agregados

let list = [];
let items = [];

export const ModalAggEdit = ({
  isOpen,
  setisOpen,
<<<<<<< HEAD
=======
  setisOpenAgg,
>>>>>>> incluye listas de agregados
  aggregates,
  listEdit,
  indexList,
  setaggList,
  btnValue,
}) => {
  const toast = useToast();

<<<<<<< HEAD
  const [showControl, setshowControl] = useState(false);

=======
>>>>>>> incluye listas de agregados
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
<<<<<<< HEAD
    name: "items",
=======
    name: 'items',
>>>>>>> incluye listas de agregados
  });

  useEffect(() => {
    remove();
<<<<<<< HEAD
    setValue("title", listEdit?.[0].title);
    setValue("req", listEdit?.[1].req);
    const lista = listEdit?.[2].forEach((element) => {
      append({ item: element?.item, price: element?.price });
    });
  }, [listEdit, setValue]);

  const onSubmit = (e) => {
    toast({
      description:
        "Presione el botón Registrar en la Fiha de producto, para conservar los cambios",
      status: "warning",
      duration: 7000,
      isClosable: true,
    });

    const cadOblig = e.req ? "obligatorio" : "";

=======
    setValue('title', listEdit?.[0].title);
    setValue('req', listEdit?.[1].req);
    setValue('minItemsNum', listEdit?.[2].minItemsNum);
    setValue('maxItemsNum', listEdit?.[3].maxItemsNum);
    const lista = listEdit?.[4].forEach((element, index) => {
      append({ item: element?.item, price: element?.price });
    });
  }, [listEdit, setValue, remove, append]);

  const onSubmit = e => {
    list = [];
    const cadOblig = e.req ? 'obligatorio' : '';
>>>>>>> incluye listas de agregados
    list.push(
      {
        title: e.title,
      },
      {
        oblig: cadOblig,
      },
      e.items
    );

<<<<<<< HEAD
    if (btnValue === "edit") {
      if (aggregates.length > 0) {
        aggregates.splice(indexList, 1, list);
      } else {
        aggregates.push(list);
      }
    }

    if (btnValue === "add") {
      aggregates.push(list);
    }

    setaggList(aggregates);
    setValue("title", "");
    setValue("item", "");
    setValue("req", false);
    setValue("list", "");
    remove();
    setshowControl(true);
  };

  const onClose = () => {
    setisOpen(false);
  };

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose}>
=======
    if (btnValue === 'edit') {
      if (aggregates.length > 0) {
        aggregates.splice(indexList, 1, list);
        setaggList(aggregates);
      } else {
        const newList = [...aggregates, list];
        setaggList(newList);
      }
    }

    if (btnValue === 'add') {
      const newList = [...aggregates, list];
      setaggList(newList);
      setisOpen(false);
    }

    setValue('title', '');
    setValue('item', '');
    setValue('req', false);
    setValue('minItemsNum', '');
    setValue('maxItemsNum', '');
    remove();
    toast({
      description:
        'Presione el botón Registrar en la Fiha de producto, para conservar los cambios',
      status: 'warning',
      duration: 7000,
      isClosable: true,
    });
    setisOpenAgg(false);
    setisOpen(false);
  };

  /*   const onClose = () => {
    setisOpen(false);
  }; */

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={setisOpen}>
>>>>>>> incluye listas de agregados
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Corrección de Listas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
<<<<<<< HEAD
              <FormControl isDisabled={showControl} isInvalid={errors.title}>
=======
              <FormControl isInvalid={errors.title}>
>>>>>>> incluye listas de agregados
                <FormLabel w={340} htmlFor="title" mt={3}>
                  Nombre de la Lista
                </FormLabel>
                <Input
                  type="text"
                  w={340}
                  placeholder="Ej: Escoge la Ensalada"
                  borderColor="gray.400"
<<<<<<< HEAD
                  {...register("title", {
                    required: "Campo Obligatorio",
=======
                  {...register('title', {
                    required: 'Campo Obligatorio',
>>>>>>> incluye listas de agregados
                  })}
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>

<<<<<<< HEAD
              <FormControl isDisabled={showControl} mt={3}>
=======
              <FormControl isInvalid={errors.subtitle}>
                <FormLabel w={340} htmlFor="subtitle" mt={3}>
                  descripcion de límites
                </FormLabel>
                <Input
                  type="text"
                  w={330}
                  placeholder="Ejemplo: Mínimo 2 Máximo 5"
                  borderColor="gray.400"
                  {...register('subtitle')}
                />
                <FormErrorMessage>
                  {errors.subtitle && errors.subtitle.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={3}>
>>>>>>> incluye listas de agregados
                <HStack spacing={10}>
                  <FormLabel htmlFor="req">
                    ¿Es obligatoria la escogencia de uno?
                  </FormLabel>
<<<<<<< HEAD
                  <input type="checkbox" {...register("req")} />
                </HStack>
              </FormControl>

=======
                  <input type="checkbox" {...register('req')} />
                </HStack>
              </FormControl>

              <HStack>
                <FormControl mt={2}>
                  <HStack>
                    <FormLabel htmlFor="minItemNum">Mínimo</FormLabel>
                    <input w="30" type={'text'} {...register('minItemsNum')} />
                  </HStack>
                </FormControl>

                <FormControl mt={2}>
                  <HStack>
                    <FormLabel htmlFor="maxItemNum">Máximo</FormLabel>
                    <input w="30" type={'text'} {...register('maxItemsNum')} />
                  </HStack>
                </FormControl>
              </HStack>

>>>>>>> incluye listas de agregados
              <ul mt={3}>
                {fields.map((element, index) => (
                  <Flex mt={2} key={element.id}>
                    <Input
                      type="text"
                      w={220}
                      placeholder="Aquí va el item"
                      borderColor="gray.400"
                      {...register(`items.${index}.item`)}
                    />
                    <Input
                      type="text"
                      placeholder="precio"
                      w={90}
                      mx={3}
                      borderColor="gray.400"
                      {...register(`items.${index}.price`)}
                    />
                    <Button
<<<<<<< HEAD
                      colorScheme={"blue"}
                      w={40}
                      leftIcon={<MdDeleteSweep />}
=======
                      colorScheme={'blue'}
                      w={40}
                      leftIcon={<AiFillDelete />}
>>>>>>> incluye listas de agregados
                      onClick={() => remove(index)}
                    >
                      Borrar
                    </Button>
                  </Flex>
                ))}
              </ul>
              <HStack mt={3}>
                <Button
<<<<<<< HEAD
                  colorScheme={"blue"}
                  leftIcon={<MdPostAdd />}
                  isDisabled={showControl}
                  w={340}
                  onClick={() => append({ item: "", price: 0 })}
                >
                  Agregar
                </Button>
                <Button
                  colorScheme={"blue"}
                  isDisabled={showControl}
                  type="submit"
                >
=======
                  colorScheme={'blue'}
                  leftIcon={<AiFillFileAdd />}
                  w={340}
                  onClick={() => append({ item: '', price: 0 })}
                >
                  Agregar
                </Button>
                <Button colorScheme={'blue'} type="submit">
>>>>>>> incluye listas de agregados
                  Cerrar Lista
                </Button>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
