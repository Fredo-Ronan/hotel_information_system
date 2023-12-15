import { useAxios } from "./apiIndex";

export const Register = async (data) => {
  const response = await useAxios.post("/register", data);
  return response.data;
};

export const Login = async (data) => {
  const response = await useAxios.post("/login", data);
  return response.data;
};
