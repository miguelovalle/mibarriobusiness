import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchConToken, fetchSInToken } from '../helpers/fetch';

export const useOrders = (id, changeDate, filtered) => {
  const listOrders = async () => {
    const resp = await fetchConToken(
      'order/orderlist',
      { id, changeDate, filtered },
      'POST'
    );
    const data = await resp.json();
    return data;
  };
  return useQuery(['listOrders', id, changeDate, filtered], listOrders);
};

export const useCountStates = ({ id, changeDate }) => {
  const getCountStates = async () => {
    const resp = await fetchSInToken(
      `order/totalgrouped`,
      { id, changeDate },
      'POST'
    );
    const data = await resp.json();
    return data;
  };
  return useQuery(['countStates', id, changeDate], getCountStates);
};

export const useMutateUpdateState = () => {
  const queryClient = useQueryClient();
  const updateState = async stateObj => {
    const resp = await fetchConToken('order/update', stateObj, 'PUT');
    const data = await resp.json();
    return data;
  };
  return useMutation({
    mutationFn: updateState,
    onSuccess: () => {
      return queryClient.invalidateQueries(['listOrders']['countStates']);
    },
  });
};
