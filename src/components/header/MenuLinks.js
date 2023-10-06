import React from "react";
import { AddressModal } from "../address/AddressModal";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const MenuLinks = ({ isOpen }) => {
  const navigate = useNavigate();

  // const CommerceEdit = () => {
  //   navigate('/auth/pag1')
  // }
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={2}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            color={"orange.800"}
            rightIcon={<AiOutlineCaretDown />}
          >
            Servicio Cliente
          </MenuButton>

          <MenuList>
            <MenuItem color={"orange.600"}>Notificaciones</MenuItem>
            <MenuItem color={"orange.600"}>Ventas</MenuItem>
            <MenuItem color={"orange.600"}>Consumo Prepago</MenuItem>
            <MenuItem color={"orange.600"}>Promociones</MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/auth/pag1");
              }}
              color={"orange.600"}
            >
              Cambiar Datos del Comercio{" "}
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            color={["orange.800"]}
            rightIcon={<AiOutlineCaretDown />}
          >
            Productos
          </MenuButton>

          <MenuList>
            <MenuItem
              onClick={() => {
                navigate("/ds/productnew");
              }}
              color={["orange.600"]}
            >
              Nuevo
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate("/ds/products");
              }}
              color={["orange.600"]}
            >
              Lista de Productos
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            color={["orange.800"]}
            rightIcon={<AiOutlineCaretDown />}
          >
            Ordenes Pedido
          </MenuButton>
          <MenuList>
            <MenuItem color={["orange.600"]}>Pendientes</MenuItem>
            <MenuItem color={["orange.600"]}>En Tránsito</MenuItem>
            <MenuItem color={["orange.600"]}>Entregadas</MenuItem>
            <MenuItem color={["orange.600"]}>Historia</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            color={["orange.800"]}
            rightIcon={<AiOutlineCaretDown />}
          >
            Tiendas
          </MenuButton>
          <MenuList>
            <MenuItem color={["orange.600"]}>Horario</MenuItem>
          </MenuList>
        </Menu>

        <Button
          size="sm"
          color={"orange.800"}
          _hover={{
            bg: ["primary.700", "primary.100", "primary.600", "primary.600"],
          }}
        >
          Salir
        </Button>
      </Stack>
      <AddressModal />
    </Box>
  );
};
