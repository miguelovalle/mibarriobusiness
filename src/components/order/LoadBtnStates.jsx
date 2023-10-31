import {
  Alert,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useCountStates } from '../hooks/orderHooks';

export const LoadBtnStates = ({ id, changeDate, updateState }) => {
  let loadState = [0, 0, 0, 0];
  let totalCount = 0;
  const { isLoading, data, isError, isSuccess } = useCountStates({
    id,
    changeDate,
  });

  const handleFilter = prop => {
    updateState(prop);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert> "Error de comunicaciones. Intente mas tarde" </Alert>;
  }

  if (isSuccess) {
    data?.countStates.forEach(item => {
      switch (item._id) {
        case 'En Cola':
          loadState[0] = item.countState;
          totalCount = totalCount + Number(item.countState);
          break;
        case 'Produccion':
          loadState[1] = item.countState;
          totalCount = totalCount + Number(item.countState);
          break;
        case 'Transito':
          loadState[2] = item.countState;
          totalCount = totalCount + Number(item.countState);
          break;
        case 'Entregado':
          loadState[3] = item.countState;
          totalCount = totalCount + Number(item.countState);
          break;
        default:
          console.log('No encontro coincidencia');
          break;
      }
    });

    return (
      <Container>
        <Flex justifyContent={'center'} wrap={'wrap'} maxW={'full'}>
          <ButtonGroup spacing={6}>
            <Flex direction={'column'}>
              <Button
                size={'sm'}
                colorScheme={'red'}
                onClick={() => handleFilter('En Cola')}
              >
                {loadState?.[0]}
              </Button>
              <Text fontSize={'xs'}>Cola</Text>
            </Flex>
            <Flex direction={'column'}>
              <Button
                size={'sm'}
                colorScheme={'orange'}
                onClick={() => handleFilter('Produccion')}
              >
                {loadState?.[1]}
              </Button>
              <Text fontSize={'xs'}>Prod</Text>
            </Flex>
            <Flex direction={'column'}>
              <Button
                size={'sm'}
                colorScheme={'green'}
                onClick={() => handleFilter('Transito')}
              >
                {loadState?.[2]}
              </Button>
              <Text fontSize={'xs'}>Trans</Text>
            </Flex>

            <Flex direction={'column'}>
              <Button
                size={'sm'}
                colorScheme={'blue'}
                onClick={() => handleFilter('Entregado')}
              >
                {loadState?.[3]}
              </Button>
              <Text fontSize={'xs'}>Final</Text>
            </Flex>

            <Flex direction={'column'}>
              <Button size={'sm'} onClick={() => handleFilter('')}>
                {' '}
                {totalCount}{' '}
              </Button>
              <Text fontSize={'xs'}>Todos</Text>
            </Flex>
          </ButtonGroup>
        </Flex>
      </Container>
    );
  }
};
