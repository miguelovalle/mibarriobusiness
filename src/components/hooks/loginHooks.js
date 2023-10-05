import { useMutation, useQuery } from "react-query";
import { fetchSInToken } from "../helpers/fetch";

export const useLogin = (login) => {
  const flogin = async () => {
    const resp = await fetchSInToken("commerce/login", login, "POST");
    const data = await resp.json();
    return data;
  };
  return useQuery(["login"], flogin, {
    enabled: false,
    retry: 1,
    staleTime: 300000,
  });
};

export const useMutateLogin = () => {
  const flogin = async (login) => {
    const resp = await fetchSInToken("commerce/login", login, "POST");
    const data = await resp.json();
    return data;
  };
  return useMutation(flogin);
};

export const usePosition = () => {
  let lng, lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((ubicacion) => {
      lng = ubicacion.coords.longitude;
      lat = ubicacion.coords.latitude;
      localStorage.setItem("long", lng);
      localStorage.setItem("lat", lat);
    });
    return lng, lat;
  }
  return lng, lat;
};
