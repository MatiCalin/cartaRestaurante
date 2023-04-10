import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

const menuApi = axios.create({
    baseURL: "http://localhost:4003/",
});

menuApi.interceptors.request.use( (config) =>{
    config.headers = {
        "x-token":localStorage.getItem("token"),
    };

    return config;
})

export default menuApi;