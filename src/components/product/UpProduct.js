import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  Button,
  Container,
  Flex,
  Spinner,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useQueryClient } from 'react-query';
import { useMutateAddProduct } from '../hooks/productHooks';

export const UpProduct = () => {
  const queryClient = useQueryClient();

  const [showAlert, setshowAlert] = useState({ show: false, message: '' });
  const [disabledBtn, setdisabledBtn] = useState(false);
  const id = sessionStorage.getItem('id');

  const { mutate, isLoading, isError, isSuccess } = useMutateAddProduct(id);

  const category = sessionStorage.getItem('category');
  const name = sessionStorage.getItem('name');
  const description = sessionStorage.getItem('description');
  const price = sessionStorage.getItem('price');
  const imgName = sessionStorage.getItem('imgName');
  const listAdd = sessionStorage.getItem('aggregates');
  const aggregates = JSON.parse(listAdd);
  const days = sessionStorage.getItem('daysno');
  const daysno = JSON.parse(days);

  const handleRegister = () => {
    const newProduct = {
      category: category,
      name: name,
      description: description,
      price: price,
      enabled: 'no',
      logo: imgName,
      commerce: id,
      aggregates: aggregates,
      daysno: daysno,
    };
    mutate(newProduct, {
      onError: () => {
        setshowAlert({
          show: true,
          message: 'La operación no se completó. Intente mas tarde',
        });
      },
      onSuccess: () => {
        setshowAlert({
          show: true,
          message: 'El producto fue actualizado en la Base de Datos',
        });
        queryClient.invalidateQueries('listproduct');
        setdisabledBtn(true);
        sessionStorage.clear();
      },
    });
  };

  return (
    <Container>
      {isError && showAlert.show ? (
        <Alert status="error">
          <AlertIcon /> {showAlert.message}
        </Alert>
      ) : (
        <></>
      )}

      {isLoading && <Spinner />}

      {isError && showAlert.show ? (
        <Alert status="error">
          <AlertIcon /> {showAlert.message}
        </Alert>
      ) : (
        <></>
      )}

      {isSuccess && showAlert.show ? (
        <Alert status="success">
          <AlertIcon /> {showAlert.message}
        </Alert>
      ) : (
        <></>
      )}

      <Button
        colorScheme="blue"
        isDisabled={disabledBtn}
        size="lg"
        w={'100%'}
        onClick={handleRegister}
      >
        Registrar Producto
      </Button>
    </Container>
  );
};
