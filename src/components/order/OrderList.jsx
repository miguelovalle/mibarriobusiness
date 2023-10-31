import React, { useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  SimpleGrid,
  Container,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Spacer,
  Divider,
  Stack,
  VStack,
  StackDivider,
} from '@chakra-ui/react';
import { useMutateUpdateState, useOrders } from '../hooks/orderHooks';
import { showDayMonth } from '../helpers/dateTranforms';
import { NumberFormat } from '../helpers/NumberFormat';
import { useForm } from 'react-hook-form';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { LoadBtnStates } from './LoadBtnStates';

export const OrderList = ({ id }) => {
  //let showDate = useRef();
  //showDate.current = showDayMonth(new Date());
  //  let showDate = useShowDayMonth(new Date());
  let stateOBj;
  let dateToTransform = showDayMonth(new Date());
  const [showDate, setShowDate] = useState(dateToTransform);
  const [changeDate, setChangeDate] = useState(new Date()); //time at order change state
  const [filtered, setFiltered] = useState('');
  const { register, handleSubmit } = useForm();
  const { isLoading, data, isError, isSuccess } = useOrders(
    id,
    changeDate,
    filtered
  );

  const mutation = useMutateUpdateState();

  const listOrder = data?.orderList;
  const today = new Date();

  const onSubmit = event => {
    let newdate = event.año + '-' + event.mes + '-' + event.dia + ' 11:00:00';
    newdate = new Date(newdate);
    dateToTransform = showDayMonth(newdate);
    setChangeDate(newdate);
    setShowDate(dateToTransform);
  };

  const updateState = state => {
    setFiltered(state);
  };

  const handleChangeState = (valueState, dateOrder) => {
    switch (valueState) {
      case 'En Cola':
        stateOBj = {
          state: 'Produccion',
          changeTime: new Date(),
          dateOrder: dateOrder,
        };
        mutation.mutate(stateOBj);
        break;

      case 'Produccion':
        stateOBj = {
          state: 'Transito',
          changeTime: new Date(),
          dateOrder: dateOrder,
        };
        mutation.mutate(stateOBj);
        break;

      case 'Transito':
        stateOBj = {
          state: 'Entregado',
          changeTime: new Date(),
          dateOrder: dateOrder,
        };
        mutation.mutate(stateOBj);
        break;
      default:
        console.log('no encontro coincidencia');
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert> "Error de comunicaciones. Intente mas tarde" </Alert>;
  }
  if (isSuccess) {
    return (
      <Box>
        <Box
          maxW={'full'}
          w={['600', '700', '950']}
          bg={'orange.100'}
          p={2}
          m={2}
          justifyContent={'center'}
          align={'center'}
          borderColor={'orange.400'}
        >
          <Heading
            w={[400, 550, 650]}
            color={'blue.700'}
            fontSize={['md', 'xl', '2xl', '3xl']}
          >
            {`Ordenes del ${showDate}`}
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)} my={4}>
            <HStack justify={'center'}>
              <NumberInput
                w={16}
                size={'sm'}
                defaultValue={today.getDate()}
                min={1}
                max={today.getDate()}
              >
                <NumberInputField {...register('dia')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <NumberInput
                w={16}
                size={'sm'}
                defaultValue={today.getMonth() + 1}
                min={1}
                max={12}
              >
                <NumberInputField {...register('mes')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <NumberInput
                w={20}
                size={'sm'}
                defaultValue={today.getFullYear()}
                min={today.getFullYear() - 1}
                max={today.getFullYear()}
              >
                <NumberInputField {...register('año')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                size={'xs'}
                type={'submit'}
                fontSize={'xs'}
                colorScheme={'blue'}
              >
                Cambia Fecha
              </Button>
            </HStack>
          </form>
        </Box>

        <LoadBtnStates
          id={id}
          changeDate={changeDate}
          updateState={updateState}
        />

        <Box maxW={'full'}>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={6}>
            {listOrder?.map(item => (
              <Box
                key={item.dateOrder}
                borderColor={'orange.400'}
                p={4}
                borderRadius={6}
                bg={'orange.100'}
                w={'full'}
                m={2}
              >
                <Flex direction={'column'} justify={'flex-start'} wrap={'wrap'}>
                  <Text fontSize={'xs'}>{item.name}</Text>
                  <Text fontSize={'xs'}>{item.address}</Text>
                  <Flex dir="row" align={'center'}>
                    <Text fontSize={'xs'}>{item.changeMoney}</Text>
                    <Spacer />
                    <Button
                      rightIcon={<TbArrowBigRightLines />}
                      h={8}
                      alignContent={'center'}
                      fontSize={'xs'}
                      onClick={() => {
                        handleChangeState(item.changeState, item.dateOrder);
                      }}
                    >
                      {item.changeState}
                    </Button>
                  </Flex>
                </Flex>
                <Flex
                  direction={'column'}
                  justify={'flex-start'}
                  wrap={'wrap'}
                  mb={2}
                >
                  <Text fontSize={'xs'}>{item.changeTime}</Text>
                  <Flex
                    justify={'flex-start'}
                    direction={'column'}
                    wrap={'wrap'}
                    mt={2}
                  >
                    {item.order.map((element1, index) => (
                      <VStack
                        key={index}
                        wrap={'wrap'}
                        justify={'flex-start'}
                        divider={<StackDivider borderColor="green.200" />}
                        align="stretch"
                      >
                        <Flex
                          direction={'row'}
                          justify={'flex-start'}
                          gap={2}
                          w={'full'}
                          spacing={3}
                        >
                          <Text fontSize={'xs'}>{element1[0].cantidad}</Text>
                          <Text fontSize={'xs'}>{element1[0].item}</Text>
                          <Spacer />
                          <Text fontSize={'xs'}>
                            {NumberFormat(element1[0].price)}
                          </Text>
                        </Flex>
                        <Flex
                          direction={'column'}
                          justify={'flex-start'}
                          align={'stretch'}
                          wrap={'wrap'}
                        >
                          <Text fontSize={'xs'}>{element1[2].join('- ')}</Text>
                          <Text fontSize={'xs'}>{element1[1].join('- ')}</Text>
                        </Flex>
                        {element1[3]?.map((element2, index) => (
                          <Stack key={index} isInline={true}>
                            <Text fontSize={'xs'}>{element2.cantidad}</Text>
                            <Text fontSize={'xs'}>{element2.item}</Text>
                          </Stack>
                        ))}
                      </VStack>
                    ))}
                  </Flex>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
  }
};
