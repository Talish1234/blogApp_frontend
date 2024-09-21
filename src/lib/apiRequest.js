import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://blogapp-backend-8vwh.onrender.com/api",
    withCredentials:true});
export default apiRequest;