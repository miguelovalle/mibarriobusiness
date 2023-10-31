import  { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { ModalAggEdit } from "./ModalAggEdit";

export const ModalAggregates = ({
  isOpenAgg,
  setisOpenAgg,
  aggregates,
  setaggList,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [indexList, setindexList] = useState(null);
  const [listEdit, setlistEdit] = useState(null);
  const [btnValue, setbtnValue] = useState("");

  const toast = useToast();

  let showPrice = "none";

  const handleClose = () => {
    setisOpenAgg(false);
  };

  const handleAdd = () => {
    setbtnValue("add");
    setisOpen(true);
  };

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
                  <Flex align="center" bg={"tomato"} color={"white"}>
                    <Text>{list[0].title}</Text>
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
                        bg={"tomato"}
                        onClick={() => {
                          toast({
                            description:
                              "Presione el botón Registrar en la Fiha de producto, para confirmar la eliminación",
                            status: "warning",
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
                        bg={"tomato"}
                        onClick={() => {
                          setisOpen(true);
                          setlistEdit(list);
                          setindexList(index);
                          setbtnValue("edit");
                        }}
                      />
                    </Tooltip>
                  </Flex>
                  <VStack>
                    {list[2]?.length > 0 &&
                      list[2]?.map((element, index) => {
                        if (element.price > 0) {
                          showPrice = "inline";
                          return (
                            <ul key={index}>
                              {element.item}
                              {element.price}
                            </ul>
                          );
                        }
                        if (element.price === 0) {
                          showPrice = "none";
                          return <ul key={index}>{element.item}</ul>;
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
              w={"100%"}
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
        setisOpenAgg={setisOpenAgg}
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
