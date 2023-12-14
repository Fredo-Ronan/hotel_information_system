import { useAxios } from "./apiIndex";

export const Register = async (data) => {
    try {
        const response = await useAxios.post("/register", data);
        return response.data.message;
    } catch (err){
        return err.response.data.message;
    }
}

export const Login = async (data) => {
    try {
        const response = await useAxios.post("/login", data);
        return response.data.message;
    } catch (err){
        return err.reponse.data.message;
    }
}

export const Verify = async (data) => {
    try {
        const response = await useAxios.get(`/register/verify/${data}`);
        return response.data.message;
    } catch (err){
        return err.response.data.message;
    }
}