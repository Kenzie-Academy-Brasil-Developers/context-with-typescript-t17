import axios from "axios";

export const api = axios.create({
    baseURL: "https://todo-fake-api.onrender.com",
    timeout: 8000,
})