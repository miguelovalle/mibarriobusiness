import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { MenuToggle } from "./MenuToggle";
import { MenuLinks } from "./MenuLinks";

export const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="orange.400"
      color={["white"]}
    >
      <Logo />
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
};
