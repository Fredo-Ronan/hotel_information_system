import { useAxios } from "./apiIndex";

export const GetAllUsers = async () => {
    const response = await useAxios.get("/user", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}