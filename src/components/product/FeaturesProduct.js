import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
  Box,
  SimpleGrid,
  Checkbox,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ModalUploadFile } from "./ModalUploadFile";

export const FeaturesProduct = ({ categories, id }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      enabled: "",
    },
  });
  let daysno = [];
  let navigate = useNavigate();
  const [isOpenUp, setisOpenUp] = useState(false);

  const onSubmit = (e) => {
    sessionStorage.setItem("name", e.name);
    sessionStorage.setItem("category", e.category);
    sessionStorage.setItem("description", e.description);
    sessionStorage.setItem("price", e.price);
    sessionStorage.setItem("enabled", e.enabled);
    sessionStorage.setItem("id", id);
    if (e.d === false) {
      daysno.push(0);
    }
    if (e.l === false) {
      daysno.push(1);
    }
    if (e.m === false) {
      daysno.push(2);
    }
    if (e.mc === false) {
      daysno.push(3);
    }
    if (e.j === false) {
      daysno.push(4);
    }
    if (e.v === false) {
      daysno.push(5);
    }
    if (e.s === false) {
      daysno.push(6);
    }
    sessionStorage.setItem("daysno", JSON.stringify(daysno));
    navigate("/ds/aggregates");
  };

  const handleUp = () => {
    setisOpenUp(true);
  };

  return (
    <Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <VStack>
            <FormControl isInvalid={errors.name}>
              <Input
                type="text"
                placeholder="Aquí va el nombre del producto"
                w={"260px"}
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
                w={"260px"}
                placeholder="Que su cliente sepa de que consta, o como se prepara "
                {...register("description", {
                  required: "Campo Obligatorio",
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <Select
                w={'260px'}
                variant="filled"
                placeholder="Categoria"
                {...register('category', {
                  required: 'Campo Obligatorio',
                })}
              >
                {categories.map((item, index) => (
                  <option key={index} value={item}>
                    {' '}
                    {item}{' '}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isInvalid={errors.price}>
              <InputGroup>
                <InputLeftAddon pointerEvents="none" children={<BiDollar />} />
                <Input
                  type="text"
                  w={"260px"}
                  placeholder="Precio"
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
            <Text>Marque los dias que se vende</Text>
            <Box
              w={230}
              h={12}
              borderWidth="2px"
              borderRadius="lg"
              borderStyle={"groove"}
              overflow="hidden"
            >
              <HStack ml={4} spacing={6}>
                <Checkbox defaultChecked size={"sm"} {...register("l")}>
                  L
                </Checkbox>
                <Checkbox defaultChecked size={"sm"} {...register("m")}>
                  M
                </Checkbox>
                <Checkbox defaultChecked size={"sm"} {...register("mc")}>
                  Mc
                </Checkbox>
                <Checkbox defaultChecked size={"sm"} {...register("j")}>
                  j
                </Checkbox>
              </HStack>
              <HStack ml={4} spacing={6}>
                <Checkbox defaultChecked size={"sm"} {...register("v")}>
                  V
                </Checkbox>
                <Checkbox defaultChecked size={"sm"} {...register("s")}>
                  S
                </Checkbox>
                <Checkbox defaultChecked size={"sm"} {...register("d")}>
                  D
                </Checkbox>
              </HStack>
            </Box>

            <HStack>
              <Button colorScheme="blue" size="md" w={28} onClick={handleUp}>
                Foto Producto
              </Button>
              <Button colorScheme="blue" w={28} size="md" type="submit">
                Siguiente..
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>
        <ModalUploadFile
          isOpenUp={isOpenUp}
          setisOpenUp={setisOpenUp}
          product={id}
        />
      </form>
    </Flex>
  );
};
