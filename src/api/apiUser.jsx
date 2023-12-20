import { useAxios } from "./apiIndex";

export const GetAllUsers = async () => {
    const response = await useAxios.get("/user", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}

export const DeleteUser = async (id) => {
    const response = await useAxios.delete(`/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}