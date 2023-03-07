import axios from "axios";

const menuApi = axios.create({
    baseURL: "http://localhost:4003/",
});

export default menuApi;