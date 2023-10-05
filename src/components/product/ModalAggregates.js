<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState } from 'react';
>>>>>>> incluye listas de agregados
import {
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  VStack,
  Tooltip,
<<<<<<< HEAD
  toast,
  useToast,
} from "@chakra-ui/react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { ModalAggEdit } from "./ModalAggEdit";
=======
  useToast,
} from '@chakra-ui/react';

import { FiTrash2, FiEdit } from 'react-icons/fi';
import { ModalAggEdit } from './ModalAggEdit';
>>>>>>> incluye listas de agregados

export const ModalAggregates = ({
  isOpenAgg,
  setisOpenAgg,
<<<<<<< HEAD
  aggregates = [],
=======
  aggregates,
>>>>>>> incluye listas de agregados
  setaggList,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [indexList, setindexList] = useState(null);
  const [listEdit, setlistEdit] = useState(null);
<<<<<<< HEAD
  const [btnValue, setbtnValue] = useState("");

  const toast = useToast();

  let showPrice = "none";
=======
  const [btnValue, setbtnValue] = useState('');

  const toast = useToast();

  let showPrice = 'none';
>>>>>>> incluye listas de agregados

  const handleClose = () => {
    setisOpenAgg(false);
  };

  const handleAdd = () => {
<<<<<<< HEAD
    setbtnValue("add");
    setisOpen(true);
  };

=======
    setbtnValue('add');
    setisOpen(true);
  };
>>>>>>> incluye listas de agregados
  return (
    <Container>
      <Modal isOpen={isOpenAgg} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Listas de Agregados</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {aggregates?.length > 0 ? (
              aggregates?.map((list, index) => (
                <Stack key={index}>
<<<<<<< HEAD
                  <Flex align="center" bg={"tomato"} color={"white"}>
                    <Text>{list[0].title}</Text>
=======
                  <Flex align="center" bg={'tomato'} color={'white'}>
                    <Text ml={4}>{list[0].title}</Text>
>>>>>>> incluye listas de agregados
                    <Spacer />
                    <Text>{list[1].oblig}</Text>
                    <Tooltip
                      hasArrow
                      label="Eliminar Lista"
                      bg="orange.700"
                      color="white"
                    >
                      <Button
                        leftIcon={<FiTrash2 />}
<<<<<<< HEAD
                        bg={"tomato"}
                        onClick={() => {
                          toast({
                            description:
                              "Presione el botón Registrar en la Fiha de producto, para confirmar la eliminación",
                            status: "warning",
=======
                        bg={'tomato'}
                        onClick={() => {
                          toast({
                            description:
                              'Presione el botón Registrar en la Fiha de producto, para confirmar la eliminación',
                            status: 'warning',
>>>>>>> incluye listas de agregados
                            duration: 7000,
                            isClosable: true,
                          });
                          aggregates.splice(index, 1);
                          setaggList(aggregates);
                          setisOpenAgg(false);
                        }}
                      />
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label="Hacer Cambios"
                      bg="orange.700"
                      color="white"
                    >
                      <Button
                        leftIcon={<FiEdit />}
<<<<<<< HEAD
                        bg={"tomato"}
=======
                        bg={'tomato'}
>>>>>>> incluye listas de agregados
                        onClick={() => {
                          setisOpen(true);
                          setlistEdit(list);
                          setindexList(index);
<<<<<<< HEAD
                          setbtnValue("edit");
=======
                          setbtnValue('edit');
>>>>>>> incluye listas de agregados
                        }}
                      />
                    </Tooltip>
                  </Flex>
                  <VStack>
<<<<<<< HEAD
                    {list[2]?.length > 0 &&
                      list[2]?.map((element, index) => {
                        if (element.price > 0) {
                          showPrice = "inline";
                          return (
                            <ul key={index}>
                              {element.item}
=======
                    {list[4]?.length > 0 &&
                      list[4]?.map((element, indexElement) => {
                        if (element.price > 0) {
                          showPrice = 'inline';
                          return (
                            <ul key={indexElement}>
                              {element.item}
                              {'  '}
>>>>>>> incluye listas de agregados
                              {element.price}
                            </ul>
                          );
                        }
                        if (element.price === 0) {
<<<<<<< HEAD
                          showPrice = "none";
                          return <ul key={index}>{element.item}</ul>;
=======
                          showPrice = 'none';
                          return <ul key={indexElement}>{element.item}</ul>;
>>>>>>> incluye listas de agregados
                        }
                      })}
                  </VStack>
                </Stack>
              ))
            ) : (
              <Text> No hay listas disponibles</Text>
            )}

            <Button
              colorScheme="blue"
<<<<<<< HEAD
              w={"100%"}
=======
              w={'100%'}
>>>>>>> incluye listas de agregados
              mr={3}
              my={3}
              onClick={handleAdd}
            >
              Nueva Lista
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ModalAggEdit
        isOpen={isOpen}
        setisOpen={setisOpen}
<<<<<<< HEAD
=======
        setisOpenAgg={setisOpenAgg}
>>>>>>> incluye listas de agregados
        showPrice={showPrice}
        aggregates={aggregates}
        listEdit={listEdit}
        indexList={indexList}
        setaggList={setaggList}
        btnValue={btnValue}
      />
    </Container>
  );
};
