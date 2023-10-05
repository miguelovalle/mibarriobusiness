import React from "react";
import { useQueryClient } from "react-query";
import { Navigate } from "react-router-dom";
import { QueryList } from "./QueryList";

export const ProductContainer = () => {
  //obtiene id y categories de react-query y los entrega a querylist
  // accion previa para sincronizar la lista
  let categories, id;

  const queryClient = useQueryClient();

  if (queryClient === undefined) {
    return <Navigate to="/" />;
  }

  const user = queryClient.getQueryData("login");
  if (user === undefined) {
    return <Navigate to="/" />;
  } else {
    categories = user.categories;
    id = user.id;
  }

  return <QueryList categories={categories} id={id} />;
};
