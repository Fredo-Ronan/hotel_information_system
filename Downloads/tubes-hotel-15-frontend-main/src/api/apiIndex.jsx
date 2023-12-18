import axios from "axios";

// Hosting Vercel Base URL
export const BASE_URL = "https://tubes-hotel-15.vercel.app";

export const useAxios = axios.create({
    baseURL: `${BASE_URL}/api/api`,
});
