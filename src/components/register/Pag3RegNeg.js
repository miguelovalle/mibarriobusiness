import { Center, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { useQueryClient } from "react-query";
import { PageHeader } from "../header/PageHeader";
import { UpFile } from "./UpFile";

export const Pag3RegNeg = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData(["login"]) || null;

  const perfil = queryClient.getQueryData(["shop", data?.id]) || null;

  const imgfile = perfil ? perfil?.commerce?.imgName : null;

  return (
    <Flex mb={2} p={2}>
      <Center w="100%">
        <VStack>
          <PageHeader
            pageName={"Subir Logo"}
            pageTitle={"Registrar Nuevo Negocio"}
          />
          <UpFile nextPage={"/auth/pag4"} imgfile={imgfile} />
        </VStack>
      </Center>
    </Flex>
  );
};
