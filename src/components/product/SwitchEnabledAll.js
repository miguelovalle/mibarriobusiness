import React from "react";
import { Container, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useMutateEnabledAll } from "../hooks/productHooks";

export const SwitchEnabledAll = ({ id, enabl, setListFiltered }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutateEnabledAll();

  return (
<<<<<<< HEAD
    <Container>
=======
    <Container justifyContent={"center"}>
>>>>>>> incluye listas de agregados
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="enabledProducts" mb="0">
          Todos Disponibles si/no
        </FormLabel>
        <Switch
          id="enabledProducts"
          onChange={() => {
            mutate(
              { id, enabl },
              {
                onError: () => {
                  console.log("hay un error");
                },
                onSuccess: () => {
                  const { products } = queryClient.getQueryData([
                    "listproducts",
                  ]);
                  setListFiltered(products);
                },
              }
            );
          }}
        />
      </FormControl>
    </Container>
  );
};
