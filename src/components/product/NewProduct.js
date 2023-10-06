import React from "react";
import { Container } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { Navigate } from "react-router-dom";
import { FeaturesProduct } from "./FeaturesProduct";

export const NewProduct = () => {
  // pasa categeries e id del negocio  a profileproduct
  const queryClient = useQueryClient();

  let categories, commerceId;

  if (queryClient === undefined) {
    return <Navigate to="/" />;
  }

  const user = queryClient.getQueryData("login");

  if (user === undefined) {
    return <Navigate to="/" />;
  } else {
    categories = user.categories;
    commerceId = user.id;
  }

  return (
    <Container>
      <FeaturesProduct categories={categories} id={commerceId} />
    </Container>
  );
};
