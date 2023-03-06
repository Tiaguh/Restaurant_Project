import axios from "axios";

const api = axios.create({
    baseURL: "https://taupe-ladybug-gear.cyclic.app/"
})

export default api;