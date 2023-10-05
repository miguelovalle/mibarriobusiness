<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState } from 'react';
>>>>>>> incluye listas de agregados
import {
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  VStack,
  FormLabel,
  Button,
  Box,
  Collapse,
  HStack,
  Flex,
<<<<<<< HEAD
} from "@chakra-ui/react";

import { useForm, useFieldArray } from "react-hook-form";
import { MdPostAdd, MdDeleteSweep } from "react-icons/md";
import { UpProduct } from "./UpProduct";

let list = [];
let items = [];
let aggregateList = [];
=======
} from '@chakra-ui/react';

import { useForm, useFieldArray } from 'react-hook-form';
import { UpProduct } from './UpProduct';
import { AiFillFileAdd, AiFillDelete } from 'react-icons/ai';
let list = [];
let items = [];
let aggregateList = [];
let aggregates = [];
>>>>>>> incluye listas de agregados

export const AggregatesProduct = () => {
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

  const [showHelp, setshowHelp] = useState(false);
  const [showControl, setshowControl] = useState(true);
  const [disabledPrice, setdisabledPrice] = useState(true);

<<<<<<< HEAD
  const onSubmit = (e) => {
    const cadOblig = e.req ? "obligatorio" : "";
=======
  const onSubmit = e => {
    const cadOblig = e.maxItemsNum > 0 ? 'obligatorio' : '';

    const len = e.items.length;
    if (e.items[len - 1].item === '') {
      e.items.pop();
    }

>>>>>>> incluye listas de agregados
    list.push(
      {
        title: e.title,
      },
      {
<<<<<<< HEAD
        oblig: cadOblig,
      },
      e.items
    );
    aggregateList.push(list);
    sessionStorage.setItem("aggregates", JSON.stringify(aggregateList));
    setValue("title", "");
    setValue("item", "");
    setValue("req", false);
=======
        subtitle: e.subtitle,
      },
      {
        oblig: cadOblig,
      },
      {
        minItemsNum: e.minItemsNum,
      },
      {
        maxItemsNum: e.maxItemsNum,
      },
      e.items
    );

    aggregateList.push(list);

    aggregates.push(aggregateList);

    sessionStorage.setItem('aggregates', JSON.stringify(aggregateList));

    setValue('title', '');
    setValue('subtitle', '');
    setValue('item', '');
    setValue('req', false);
    setValue('minItemsNum', null);
    setValue('maxItemsNum', null);
>>>>>>> incluye listas de agregados
    remove();
    setshowControl(true);
  };

  const handleShow = () => {
    setshowHelp(!showHelp);
  };

  const setDefault = () => {
<<<<<<< HEAD
    setValue("title", "");
    setValue("item", "");
=======
    setValue('title', '');
    setValue('subtitle', '');
    setValue('item', '');
>>>>>>> incluye listas de agregados
    list = [];
    items = [];
  };

  const setAggregate = () => {
    setDefault();
    setshowControl(false);
    setdisabledPrice(true);
    list = [];
    items = [];
  };

  const setAdd = () => {
    setDefault();
    setshowControl(false);
    setdisabledPrice(false);
    list = [];
    items = [];
  };

  return (
    <Container>
<<<<<<< HEAD
      {" "}
=======
      {' '}
>>>>>>> incluye listas de agregados
      <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <hr width="340px" />
          <HStack spacing={6} my={3}>
            <Button
              colorScheme="blue"
<<<<<<< HEAD
              variant={"link"}
=======
              variant={'link'}
>>>>>>> incluye listas de agregados
              size="lg"
              overflow="hidden"
              onClick={handleShow}
            >
              Ayuda
            </Button>
            <h1>/</h1>
            <Button
              colorScheme="blue"
<<<<<<< HEAD
              variant={"link"}
=======
              variant={'link'}
>>>>>>> incluye listas de agregados
              size="lg"
              onClick={setAggregate}
            >
              Agregados
            </Button>
            <h1>/</h1>
            <Button
              colorScheme="blue"
<<<<<<< HEAD
              variant={"link"}
=======
              variant={'link'}
>>>>>>> incluye listas de agregados
              size="lg"
              onClick={setAdd}
            >
              Adicionales
            </Button>
          </HStack>
          <hr width="340px" />

          <Collapse in={showHelp} animateOpacity>
            <Box
              p="40px"
              w={340}
              color="white"
              mt="4"
              bg="blue.500"
              rounded="md"
              shadow="md"
            >
              <Text>
                Construya listas de items adcionales al producto ( con o sin
                costo) que mejoran la receta original, al gusto del consumidor
              </Text>
              <Text>
                Puede agregar varias listas, cada una con un encabezado
                descriptivo y funciones como: quitar o poner elementos, armar
                menús, hacer obligatoria la escogencia de un item.
              </Text>
            </Box>
          </Collapse>

          <FormControl isDisabled={showControl} isInvalid={errors.title}>
            <FormLabel w={340} htmlFor="title" mt={3}>
              Nombre de la Lista
            </FormLabel>
            <Input
              type="text"
              w={330}
<<<<<<< HEAD
              placeholder="Ej: Escoge la Ensalada"
              borderColor="gray.400"
              {...register("title", {
                required: "Campo Obligatorio",
=======
              placeholder="Ejemplo: Escoge la Ensalada"
              borderColor="gray.400"
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
            <HStack spacing={10}>
              <FormLabel htmlFor="req">
                ¿Es obligatoria la escogencia de uno?
              </FormLabel>
              <input type="checkbox" {...register("req")} />
            </HStack>
=======
          <FormControl isDisabled={showControl} isInvalid={errors.subtitle}>
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

          <FormControl isDisabled={showControl} isInvalid={errors.minItemsNum}>
            <FormLabel htmlFor="minItemsNum" mt={3}>
              ¿Cuántos Items mínimo, es obligatorio elegir?
            </FormLabel>
            <Input
              type="number"
              w={250}
              borderColor="gray.400"
              placeholder="0-si no hay mínimo obligatorio"
              {...register('minItemsNum', {
                required: 'Campo Obligatorio',
                min: { value: 0, message: 'Número no Válido' },
              })}
            />
            <FormErrorMessage>
              {errors.minItemsNum && errors.minItemsNum.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isDisabled={showControl} isInvalid={errors.maxItemsNum}>
            <FormLabel htmlFor="maxItemsNum" mt={3}>
              ¿Cuántos Items máximo, es obligatorio elegir?
            </FormLabel>
            <Input
              type="number"
              w={250}
              borderColor="gray.400"
              placeholder="0-cuando no es obligatorio"
              {...register('maxItemsNum', {
                required: 'Campo Obligatorio',
                min: { value: 0, message: 'Número no Válido' },
                max: { value: 10, message: 'Máximo 10 items' },
              })}
            />
            <FormErrorMessage>
              {errors.maxItemsNum && errors.maxItemsNum.message}
            </FormErrorMessage>
>>>>>>> incluye listas de agregados
          </FormControl>

          {fields.map((element, index) => (
            <Flex w={340} mt={2} key={element.id}>
              <Input
                type="text"
                w={170}
                placeholder="Aquí va el item"
                borderColor="gray.400"
                {...register(`items.${index}.item`)}
              />
              <Input
                type="text"
                placeholder="precio"
                isDisabled={disabledPrice}
                w={75}
                mx={3}
                borderColor="gray.400"
                {...register(`items.${index}.price`)}
              />
              <Button
<<<<<<< HEAD
                colorScheme={"blue"}
                w={59}
                leftIcon={<MdDeleteSweep />}
=======
                colorScheme={'blue'}
                w={59}
                leftIcon={<AiFillDelete />}
>>>>>>> incluye listas de agregados
                onClick={() => remove(index)}
              />
            </Flex>
          ))}

          <HStack mt={3} w={340} mx={4}>
            <Button
<<<<<<< HEAD
              colorScheme={"blue"}
              isDisabled={showControl}
              leftIcon={<MdPostAdd />}
              w={160}
              onClick={() => append({ item: "", price: 0 })}
=======
              colorScheme={'blue'}
              isDisabled={showControl}
              leftIcon={<AiFillFileAdd />}
              w={160}
              onClick={() => append({ item: '', price: 0 })}
>>>>>>> incluye listas de agregados
            >
              Agregar
            </Button>
            <Button
              w={160}
<<<<<<< HEAD
              colorScheme={"blue"}
=======
              colorScheme={'blue'}
>>>>>>> incluye listas de agregados
              isDisabled={showControl}
              type="submit"
            >
              Cerrar Lista
            </Button>
          </HStack>
        </form>
        <Box w={330} mt={3}>
          <UpProduct />
        </Box>
      </VStack>
    </Container>
  );
};
