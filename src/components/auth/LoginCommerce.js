import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  Flex,
  Center,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PageHeader } from "../header/PageHeader";
import { BiEnvelope } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/loginHooks";

export const LoginCommerce = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPasswd, setshowPasswd] = useState(false);

  const [msg, setmsg] = useState(null);

  const mail = useRef({ email: null, password: null });

  const { data, isSuccess, isLoading, error, refetch } = useLogin(mail.current);

  const handleClick = () => setshowPasswd(!showPasswd);

  useEffect(() => {
    refetch();
    if (isSuccess) {
      if (data.ok === true) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        navigate("/ds/dashboard");
      }
    } else {
      setmsg("error de comunicación. POr favor, intente de nuevo mas tarde");
    }
  }, [data?.ok, mail.current, isSuccess, refetch, navigate]);

  const onSubmit = (e) => {
    mail.current = { email: e.email, password: e.password };
  };

  return (
    <Flex mb={2} p={2}>
      <Center w="100%">
        <VStack>
          <PageHeader pageTitle={"Ingresar a Plataforma"} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <FormControl isInvalid={errors.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BiEnvelope />}
                  />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    borderColor="gray.400"
                    {...register("email", {
                      required: "El correo es obligatorio",
                    })}
                  />
                </InputGroup>

                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <InputGroup>
                  <Input
                    type={showPasswd ? "text" : "password"}
                    borderColor="gray.400"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La Contraseña es obligatoria",
                    })}
                  />
                  <InputRightElement>
                    <Button
                      leftIcon={<BiHide />}
                      variant="outline"
                      size="md"
                      onClick={handleClick}
                    ></Button>
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              {isLoading && <Spinner />}
              {error && msg}
              <Button
                type="submit"
                disabled={isLoading}
                colorScheme="blue"
                size="lg"
                mt={6}
                w="100%"
              >
                Ingresar
              </Button>
            </VStack>
          </form>
          <Link to="/auth/Pag1">Registrar un nuevo Negocio</Link>
        </VStack>
      </Center>
    </Flex>
  );
};
