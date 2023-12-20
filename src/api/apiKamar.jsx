import { useAxios } from "./apiIndex";

export const GetKamar = async () => {
    const response = await useAxios.get("/room");

    return response.data;
}

export const AddKamar = async (data) => {
    const response = await useAxios.post("/room", data, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
};

export const UpdateKamar = async (data, id) => {
    const response = await useAxios.post(`/room/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}

export const DeleteKamar = async (id) => {
    const response = await useAxios.delete(`/room/${id}`, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}