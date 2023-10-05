import React from 'react'
import { Box, Heading, Flex, } from '@chakra-ui/react'

export const Dashboard = () => {

    return (
        <Box >
            <Flex direction="column" align="center">
                <Heading as="h2" size="xl" color="orange.400" mt="14" p="4" >
                    Bienvenido al portal de Negocios de MiBarrio 
                </Heading>

                <Heading as="h4" size="md" color="orange.600" >
                    
                    Espacio para programar y mantener su presencia en la nube
                </Heading>
            </Flex>
        </Box>
    )
}
