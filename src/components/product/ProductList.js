<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState } from 'react';
>>>>>>> incluye listas de agregados
import {
  Box,
  Flex,
  Select,
<<<<<<< HEAD
  Link,
  Stack,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

import { ModalProduct } from "./ModalProduct";
import { SwitchEnabled } from "./SwitchEnabled";
import { SwitchEnabledAll } from "./SwitchEnabledAll";
=======
  Stack,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';

import { ModalProduct } from './ModalProduct';
import { SwitchEnabled } from './SwitchEnabled';
import { SwitchEnabledAll } from './SwitchEnabledAll';
>>>>>>> incluye listas de agregados

export const ProductList = ({ list, id, categories }) => {
  // render the list. onclick show modalproduct with the data product
  const [listFiltered, setListFiltered] = useState(list); // to applay filter by categories
  const [product, setProduct] = useState(null); //apdate the product to show on modalproduct
  const { isOpen, onOpen, onClose } = useDisclosure();

  const enabl = list[0]?.enabled;

<<<<<<< HEAD
  const handleChangeSelect = (e) => {
    const listState = list.filter((item) => {
=======
  const handleChangeSelect = e => {
    const listState = list.filter(item => {
>>>>>>> incluye listas de agregados
      return item.category === e.target.value;
    });
    setListFiltered(listState);
  };

  return (
    <Stack direction="row" w="full">
<<<<<<< HEAD
      <Flex direction={"column"}>
=======
      <Flex direction={'column'}>
>>>>>>> incluye listas de agregados
        <HStack spacing={4}>
          <Select
            placeholder="Filtrar por Categoría"
            onChange={handleChangeSelect}
          >
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>

          <SwitchEnabledAll
            id={id}
            enabl={enabl}
            setListFiltered={setListFiltered}
          />
        </HStack>

<<<<<<< HEAD
        {listFiltered.map((item, index) => (
          <Flex key={item._id}>
            <Box
              as={Link}
              w="240px"
=======
        {listFiltered.map(item => (
          <Flex key={item._id}>
            <Box
              as="a"
              href="#"
              w="240px"
              ml={5}
>>>>>>> incluye listas de agregados
              h={12}
              onClick={() => {
                setProduct(item);
                onOpen();
              }}
            >
              {item.name}
            </Box>

            <SwitchEnabled item={item} />

            <Box w="48px" h={12}>
<<<<<<< HEAD
              {" "}
              {item.enabled}{" "}
=======
              {' '}
              {item.enabled}{' '}
>>>>>>> incluye listas de agregados
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex>
        <ModalProduct
          product={product}
          isOpen={isOpen}
          onClose={onClose}
          id={id}
          categories={categories}
          setListFiltered={setListFiltered}
        />
      </Flex>
    </Stack>
  );
};
