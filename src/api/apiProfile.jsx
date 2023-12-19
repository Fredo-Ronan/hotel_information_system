import { useAxios } from "./apiIndex";

export const UpdateProfileImage = async (data) => {
    const response = await useAxios.post(`/updateProfilePhoto/${JSON.parse(sessionStorage.getItem("user")).id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    });

    return response.data;
}

export const UpdateProfileData = async (data) => {
    const response = await useAxios.post(`/updateProfileData/${JSON.parse(sessionStorage.getItem("user")).id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    });

    return response.data;
}

export const GetUserData = async () => {
    const response = await useAxios.get(`/getUserData/${JSON.parse(sessionStorage.getItem("user")).id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    });

    return response.data;
}