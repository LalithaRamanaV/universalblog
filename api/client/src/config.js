import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:"https://universalblog.herokuapp.com/api/"
})