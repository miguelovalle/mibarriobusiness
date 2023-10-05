import { useMutation, useQuery } from "react-query";
import { fetchConToken, fetchSInToken } from "../helpers/fetch";

export const useMutateAddShop = () => {
  const addCommerce = async (commerce) => {
    const resp = await fetchSInToken("commerce/new", commerce, "POST");
    const data = await resp.json();
    console.log("data luego de hacer fetch", data);
    return data;
  };

  return useMutation(addCommerce);
};

export const useMutateUpdateShop = (id) => {
  const updateShop = async (commerce) => {
    const resp = await fetchConToken(`commerce/${id}`, commerce, "PUT");
    const data = await resp.json();
    return data;
  };
  return useMutation(updateShop);
};

export const useMutateGetCommerce = () => {
  const getCommerce = async (id) => {
    const resp = await fetchConToken(`commerce/${id}`);
    const data = await resp.json();
    return data;
  };

  return useMutation(getCommerce);
};

export const useShop = (id) => {
  const shop = async () => {
    const resp = await fetchSInToken(`commerce/${id}`, "GET");
    const data = await resp.json();
    return data;
  };
  return useQuery(["shop", id], shop);
};
