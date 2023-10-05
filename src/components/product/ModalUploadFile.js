import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { UpFile } from "../register/UpFile";

export const ModalUploadFile = ({ isOpenUp, setisOpenUp, product }) => {
  const handleClose = () => {
    setisOpenUp(false);
  };

  return (
    <Modal isOpen={isOpenUp} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <UpFile product={product} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
