import axios from "axios";

export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APIURL || "/api",
    headers: {
        "Content-Type": "application/json",
    }
});