import React, { useState } from "react";
import {
  Box,
  Flex,
  Select,
  Link,
  Stack,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

import { ModalProduct } from "./ModalProduct";
import { SwitchEnabled } from "./SwitchEnabled";
import { SwitchEnabledAll } from "./SwitchEnabledAll";

export const ProductList = ({ list, id, categories }) => {
  // render the list. onclick show modalproduct with the data product
  const [listFiltered, setListFiltered] = useState(list); // to applay filter by categories
  const [product, setProduct] = useState(null); //apdate the product to show on modalproduct
  const { isOpen, onOpen, onClose } = useDisclosure();

  const enabl = list[0]?.enabled;

  const handleChangeSelect = (e) => {
    const listState = list.filter((item) => {
      return item.category === e.target.value;
    });
    setListFiltered(listState);
  };

  return (
    <Stack direction="row" w="full">
      <Flex direction={"column"}>
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

        {listFiltered.map(item => (
          <Flex key={item._id}>
            <Box
              as="a"
              href="#"
              w="240px"
              ml={5}
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
              {" "}
              {item.enabled}{" "}
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
