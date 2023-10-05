import React from "react";
import { Alert, Spinner, Stack } from "@chakra-ui/react";
import { ProductList } from "./ProductList";
import { useProducts } from "../hooks/productHooks";

export const QueryList = ({ categories, id }) => {
  //capta primero lista  y categorias previo al renderizado
  const { isLoading, data, isError, isSuccess } = useProducts(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert> "Error de comunciaciones. Intente mas tarde" </Alert>;
  }

  if (isSuccess) {
    return (
      <Stack w="full">
        <ProductList list={data?.products} id={id} categories={categories} />
      </Stack>
    );
  }
};
