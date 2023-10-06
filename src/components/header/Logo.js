import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../images/logoMiBarrio.png";

export default function Logo() {
  return (
    <Box my={2}>
      <Image src={logo} alt="Logo de MiBarrio" />
    </Box>
  );
}

