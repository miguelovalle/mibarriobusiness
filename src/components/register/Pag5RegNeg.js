import React, { useState } from 'react';
import {
  Input,
  Grid,
  FormControl,
  FormErrorMessage,
  Button,
  Flex,
  Center,
  VStack,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PageHeader } from '../header/PageHeader';
import { comercioObj } from '../helpers/comercioObj';
import { useMutateAddShop, useMutateUpdateShop } from '../hooks/commerceHooks';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const Pag5RegNeg = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const toast = useToast();
  const [showBtn, setShowBtn] = useState('none');

  const commerce = comercioObj();

  const queryClient = useQueryClient();
  const shopinf = queryClient.getQueryData(['login']) || null;
  const resultUpdate = useMutateUpdateShop(shopinf?.id);
  const resultAdd = useMutateAddShop();
  const navigate = useNavigate();

  const onSubmit = e => {
    sessionStorage.setItem('passwd', e.password);
    commerce.passwd = e.password;
    if (!shopinf?.id) {
      resultAdd.mutate(commerce, {
        onError: () => {
          toast({
            title: `el error es:${resultAdd.error}`,
            status: 'warning',
            duration: 6000,
            isClosable: true,
          });
        },
        onSuccess: () => {
          return toast({
            title: 'Su negocio ha sido agregado a nuestra Base de Datos',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
        },
      });
    }

    if (shopinf?.id) {
      resultUpdate.mutate(commerce, {
        onError: () => {
          toast({
            title: 'No se pudo actualizar el registro. Intente más tarde',
            status: 'warning',
            duration: 6000,
            isClosable: true,
          });
        },
        onSuccess: data => {
          toast({
            title:
              'Los datos de su negocio fueron actualizados en la Base de Datos',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
        },
      });
    }
    setShowBtn('inline');
  };

  return (
    <Flex mb={2} p={2}>
      <Center w="100%">
        <VStack>
          <PageHeader
            pageName={'Registro de Contraseña'}
            pageTitle={'Registrar Nuevo Negocio'}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={3}>
              <label htmlFor="password">Contraseña</label>
              <FormControl isInvalid={errors.password}>
                <Input
                  type="password"
                  borderColor="gray.400"
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                    minLength: { value: 7, message: 'Mínimo 7 digitos' },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <label htmlFor="password2">Confirmar Contraseña</label>
              <FormControl isInvalid={errors.password2}>
                <Input
                  type="password"
                  borderColor="gray.400"
                  {...register('password2', {
                    required: 'Confirme la Contraseña',
                    validate: {
                      coincidePswAnterior: value => {
                        const { password } = getValues();
                        return (
                          password === value ||
                          'Las contraseñas deben coincidir'
                        );
                      },
                    },
                    minLength: { value: 7, message: 'Mínimo 7 digitos' },
                  })}
                />
                <FormErrorMessage>
                  {errors.password2 && errors.password2.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>
            {resultAdd.isLoading && <Spinner />}
            {resultUpdate.isLoading && <Spinner />}
            <Button type="submit" colorScheme="blue" size="lg" mt={6} w="100%">
              Registrar Negocio...
            </Button>
            <Button
              display={showBtn}
              colorScheme="blue"
              size="lg"
              mt={6}
              w="100%"
              onClick={() => {
                navigate('/ds/dashboard');
              }}
            >
              Ir a pagina de validación usuario"
            </Button>
          </form>
        </VStack>
      </Center>
    </Flex>
  );
};
