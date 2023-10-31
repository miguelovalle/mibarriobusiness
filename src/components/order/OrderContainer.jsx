import React from 'react';
import { useQueryClient } from 'react-query';
import { Navigate } from 'react-router-dom';
import { OrderList } from './OrderList';

export const OrderContainer = () => {
  let id;

  const queryClient = useQueryClient();

  if (queryClient === undefined) {
    return <Navigate to="/" />;
  }

  const user = queryClient.getQueryData('login');
  if (user === undefined) {
    return <Navigate to="/" />;
  } else {
    id = user.id;
  }
  return <OrderList id={id} />;
};
