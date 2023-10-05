
import React, { useState } from 'react';
import { Input, FormControl, FormErrorMessage, Button, Flex, Center, VStack, InputGroup, InputLeftElement, InputRightElement,  } from "@chakra-ui/react";
const { register, handleSubmit, formState: { errors } } = useForm();
import { useDispatch } from 'react-redux';
import { PageHeader } from '../header/PageHeader';
import { BiEnvelope } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { startLogin } from '../../actions/auth';
import { Link, useNavigate } from "react-router-dom";

export const LoginBusiness = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();   
    const [show, setshow] = useState(false);
    let navigate=useNavigate();

    const handleClick = () => setshow(!show);
   
    const onSubmit = ( data ) => {
        dispatch( startLogin( 'commerce/login', data.email, data.password ) );
        navigate("/ds/dashboard"); 
    }

    return (
        <Flex  mb={2} p={2}>
            <Center w="100%" > 
                <VStack>
                    <PageHeader pageTitle = { "Ingresar a Plataforma" } />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <VStack>
                        <FormControl isInvalid={ errors.email }>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={ <BiEnvelope />}
                                />
                                <Input
                                    type="text"
                                    placeholder="Correo Electrónico"
                                    borderColor="gray.400"
                                    {...register("email", { 
                                                    required: true,
                                                })}
                                />                            
                            </InputGroup>

                            <FormErrorMessage> 
                                {errors.email && errors.email.message}
                            </FormErrorMessage>  
                        </FormControl>

                        <FormControl isInvalid={errors.password}>
                            <InputGroup>
                                <Input
                                type={show ? 'text' :'password'}
                                borderColor="gray.400"
                                placeholder="Contraseña"
                                {...register("password", { 
                                    required: true,
                                    })}
                                />  
                                <InputRightElement>
                                    <Button 
                                        leftIcon={ < BiHide /> }
                                        variant="outline"
                                        size="md"
                                        onClick={ handleClick } >
                                    </Button>
                                </InputRightElement>                     
                            </InputGroup>

                            <FormErrorMessage> 
                                {errors.password && errors.password.message}
                            </FormErrorMessage> 
                            
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            size="lg" 
                            mt={6}
                            w="100%"
                        >
                            Ingresar
                        </Button>

                        </VStack>
                    </form>
                    <Link to= "/auth/Pag1" >Registrar un nuevo Negocio</Link>
                </VStack>
                
            </Center>
        </Flex>
    )
}
