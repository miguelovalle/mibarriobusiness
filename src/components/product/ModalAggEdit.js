import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import {  MdDeleteSweep } from "react-icons/md";

let list = [];
let items = [];

export const ModalAggEdit = ({
  isOpen,
  setisOpen,
  setisOpenAgg,
  aggregates,
  listEdit,
  indexList,
  setaggList,
  btnValue,
}) => {
  const toast = useToast();

  const [showControl, setshowControl] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    remove();
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
    list.push(
      {
        title: e.title,
      },
      {
        oblig: cadOblig,
      },
      e.items
    );

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
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Corrección de Listas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isDisabled={showControl} isInvalid={errors.title}>
                <FormLabel w={340} htmlFor="title" mt={3}>
                  Nombre de la Lista
                </FormLabel>
                <Input
                  type="text"
                  w={340}
                  placeholder="Ej: Escoge la Ensalada"
                  borderColor="gray.400"
                  {...register("title", {
                    required: "Campo Obligatorio",
                  })}
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>

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
                <HStack spacing={10}>
                  <FormLabel htmlFor="req">
                    ¿Es obligatoria la escogencia de uno?
                  </FormLabel>
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
                      colorScheme={"blue"}
                      w={40}
                      leftIcon={<MdDeleteSweep />}
                      onClick={() => remove(index)}
                    >
                      Borrar
                    </Button>
                  </Flex>
                ))}
              </ul>
              <HStack mt={3}>
                <Button
                  colorScheme={"blue"}
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
