import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './router/AppRouter';
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export const MiBarrioBs = () => {
    return (
        <ChakraProvider>
            <QueryClientProvider client = {queryClient} >
                    <Provider store = { store } >
                        <AppRouter />
                    </Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}

=======
import { AppRouter } from './router/AppRouter';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export const MiBarrioBs = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
>>>>>>> incluye listas de agregados
