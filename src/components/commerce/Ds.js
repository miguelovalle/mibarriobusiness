import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import { HeaderBar } from '../header/HeaderBar';
import { useQueryClient } from 'react-query';

export const Ds = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['login']);

  if (user?.ok === true) {
    return (
      <Box>
        <HeaderBar />
        <Outlet />
      </Box>
    );
  } else {
    return <Navigate to={'/'} />;
  }
};
