import { useAxios } from "./apiIndex";

export const AddBooking = async (data) => {
    const response = await useAxios.post("/booking", data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    });

    return response.data;
}

export const GetBooking = async () => {
    const response = await useAxios.get("/booking", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
}

export const GetMyBooking = async () => {
    const response = await useAxios.get(`/mybooking/${JSON.parse(sessionStorage.getItem("user")).id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        }
    });

    return response.data;
}