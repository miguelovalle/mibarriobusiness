import React from "react";
import { Container, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useMutateUpdateProduct } from "../hooks/productHooks";

export const SwitchEnabled = ({ item }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutateUpdateProduct();

  return (
    <Container>
      <FormControl display="flex" direction="row" h={12}>
        <FormLabel htmlFor="enabledProduct" mb={0}>
          Disponible
        </FormLabel>
        <Switch
          id="enabledProduct"
          onChange={() => {
            switch (item.enabled) {
              case "si":
                item.enabled = "no";
                break;
              case "no":
                item.enabled = "si";
                break;
            }

            mutate(item, {
              onSuccess: () => {
                queryClient.invalidateQueries("listproducts");
              },
            });
          }}
        />
      </FormControl>
    </Container>
  );
};
