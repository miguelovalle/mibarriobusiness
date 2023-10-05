import React, { useRef } from 'react'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Button, useToast,  } from '@chakra-ui/react'
import { useQueryClient } from 'react-query';
import { useMutateDelectProduct } from '../hooks/productHooks';
import { BiBorderRadius } from 'react-icons/bi';

export const AlertDelete = ( {isOpenDialog, setisOpenDialog, productId, setListFiltered} ) => {
    
    const cancelRef = useRef();
    const toast = useToast();

    const onClose = () => {
        setisOpenDialog(false);
    };
 
    const queryClient = useQueryClient();
    const { mutate }= useMutateDelectProduct();


    const handleDelete = () => {

        setisOpenDialog(false);

        mutate(productId, { 
            onError: () => {
                toast({
                    title: "No se pudo eliminar. Intente más tarde",
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                });
                        
            },
            onSuccess : () => {
                const {products} = queryClient.getQueryData(['listproducts']);
                setListFiltered( products );
                toast({
                    title: 'El producto ha sido eliminado.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            }
        });

    };

  return (
    <AlertDialog
        isOpen={isOpenDialog}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
    >
        <AlertDialogOverlay>
        <AlertDialogContent>
            <AlertDialogBody>
            Confirme si quiere borrar este producto
            </AlertDialogBody>

            <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                </Button>
                <Button 
                    colorScheme='red' 
                    onClick={handleDelete} ml={3}
                >
                 Borrar
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>



  )
}
