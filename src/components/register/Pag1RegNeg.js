import React from "react";
import {
  Input,
  Grid,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
  Flex,
  Center,
  VStack,
  Select,
  Tooltip,
  Spinner,
<<<<<<< HEAD
=======
  Box,
  Checkbox,
  Text,
  HStack,
>>>>>>> incluye listas de agregados
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CgPlayTrackNextR } from "react-icons/cg";
import { PageHeader } from "../header/PageHeader";
import { useQueryClient } from "react-query";
import { useShop } from "../hooks/commerceHooks";

export const Pag1RegNeg = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

<<<<<<< HEAD
=======
  let daysNo = [];

>>>>>>> incluye listas de agregados
  const queryClient = useQueryClient();

  const shopinf = queryClient.getQueryData(["login"]) || null;

  const { data, isLoading, isSuccess } = useShop(shopinf?.id);

  const commerce = data?.result;

  if (isSuccess) {
    if (data.ok) {
<<<<<<< HEAD
      setValue("tipo", commerce?.tipo);
      setValue("name", commerce?.name);
      setValue("emblem", commerce?.emblem);
      setValue("specialty", commerce?.specialty);
      setValue("categories", commerce?.categories);
=======
      if (!!commerce) {
        setValue("tipo", commerce?.tipo);
        setValue("name", commerce?.name);
        setValue("emblem", commerce?.emblem);
        setValue("specialty", commerce?.specialty);
        setValue("categories", commerce?.categories);
        setValue("hInicio", commerce?.hInicio);
        setValue("hFinal", commerce?.hFinal);
      }
>>>>>>> incluye listas de agregados
    }
  }

  const onSubmit = (e) => {
    sessionStorage.setItem("tipo", e.tipo);
    sessionStorage.setItem("name", e.name);
    sessionStorage.setItem("emblem", e.emblem);
    sessionStorage.setItem("specialty", e.specialty);
    sessionStorage.setItem("categories", e.categories);
<<<<<<< HEAD
=======
    !e.d && daysNo.push(0);
    !e.l && daysNo.push(1);
    !e.m && daysNo.push(2);
    !e.mc && daysNo.push(3);
    !e.j && daysNo.push(4);
    !e.v && daysNo.push(5);
    !e.s && daysNo.push(6);
    sessionStorage.setItem("daysno", JSON.stringify(daysNo));
    sessionStorage.setItem("hInicio", e.hInicio);
    sessionStorage.setItem("hFinal", e.hFinal);
>>>>>>> incluye listas de agregados
    navigate("/auth/pag2");
  };

  return (
    <Flex mb={2} p={2}>
      <Center w="100%">
        <VStack>
          <PageHeader
<<<<<<< HEAD
            pageName={"Datos del Negocio"}
            pageTitle={"Registrar Nuevo Negocio"}
=======
            pageName={"Datos Básicos"}
            pageTitle={"Registro de un Nuevo Negocio"}
>>>>>>> incluye listas de agregados
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={3}>
              <label htmlFor="tipo">Tipo Negocio</label>
              <FormControl isInvalid={errors.tipo}>
                <Select
                  bg="orange.300"
                  borderColor="tomato"
                  color="blue"
                  {...register("tipo", { required: "Campo Obligatorio" })}
                >
                  <option value="restaurante">Restaurante</option>
                  <option value="cafeteria">Cafetería</option>
                  <option value="peluqueria">Peluqurería</option>
                </Select>
                <FormErrorMessage>
                  {errors.tipo && errors.tipo.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.name}>
                <Input
                  type="text"
                  borderColor="gray.400"
                  placeholder="Nombre del Negocio"
                  {...register("name", {
                    required: "Campo Obligatorio",
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.emblem}>
                <Input
                  type="text"
                  borderColor="gray.400"
                  placeholder="Emblema del Negocio"
                  {...register("emblem", {
                    required: "Campo Obligatorio",
                    maxLength: { value: 30, message: "Máximo 30 Caracteres" },
                  })}
                />
                <FormHelperText>
                  Ej: Solo trabajamos con carnes maduradas
                </FormHelperText>
                <FormErrorMessage>
                  {errors.emblem && errors.emblem.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.specialty}>
                <Input
                  type="text"
                  borderColor="gray.400"
                  placeholder="Especialidad"
                  {...register("specialty", {
                    required: "Campo Obligatorio",
                    maxLength: { value: 30, message: "Máximo 30 caracteres" },
                  })}
                />
                <FormHelperText>Ej: Asados y Parrilla</FormHelperText>
                <FormErrorMessage>
                  {errors.specialty && errors.specialty.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.categories}>
                <Tooltip
                  label="Use solo coma para separar las categorias"
                  placement="top"
                  defaultIsOpen
                >
                  <Input
                    type="text"
                    borderColor="gray.400"
                    placeholder="Clasificación de los Productos"
                    {...register("categories", {
                      required: true,
                      message: " Campo Obligatorio",
                    })}
                  />
                </Tooltip>

                <FormHelperText>
                  Ej: Entradas, Carnes, Sopas, Ensaladas, Bebidas
                </FormHelperText>
                <FormErrorMessage>
                  {errors.categories && errors.categories.message}
                </FormErrorMessage>
              </FormControl>
<<<<<<< HEAD
=======
              <VStack>
                <Text>Días de Atención</Text>
                <Box
                  display={"flex"}
                  w={330}
                  h={12}
                  borderWidth="2px"
                  borderRadius="lg"
                  borderStyle={"groove"}
                  overflow="hidden"
                  justifyContent={"space-evenly"}
                >
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
                  <Checkbox defaultChecked size={"sm"} {...register("v")}>
                    V
                  </Checkbox>
                  <Checkbox defaultChecked size={"sm"} {...register("s")}>
                    S
                  </Checkbox>
                  <Checkbox defaultChecked size={"sm"} {...register("d")}>
                    D
                  </Checkbox>
                </Box>
              </VStack>
              <VStack>
                <Text>Horario de Atención:</Text>
                <HStack>
                  <FormControl isInvalid={errors.hInicio}>
                    <Input
                      type="time"
                      w={40}
                      h={12}
                      borderColor="gray.400"
                      {...register("hInicio", {
                        required: "Campo Obligatorio",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.hInicio.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.hFinal}>
                    <Input
                      type="time"
                      w={40}
                      h={12}
                      borderColor="gray.400"
                      {...register("hFinal", {
                        required: "Campo Obligatorio",
                      })}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.hFinal.message}
                    </FormErrorMessage>
                  </FormControl>
                </HStack>
              </VStack>
>>>>>>> incluye listas de agregados
            </Grid>
            {isLoading && <Spinner />}

            <Button
              type="submit"
              mt="6"
              rightIcon={<CgPlayTrackNextR />}
              colorScheme="blue"
              size="lg"
              w="100%"
            >
              Siguiente...
            </Button>
          </form>
        </VStack>
      </Center>
    </Flex>
  );
};
