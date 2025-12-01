import axios from "axios";

// Hosting Vercel Base URL
export const BASE_URL = "https://his-api.fredoronan.web.id";

// Localhost Base URL
// export const BASE_URL = "http://127.0.0.1:8080";

// Hosting Vercel Axios Config
// export const useAxios = axios.create({
//     baseURL: `${BASE_URL}/api/api`,
// });

// Localhost Axios Config
export const useAxios = axios.create({
    baseURL: `${BASE_URL}/api`,
});
