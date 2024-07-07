import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://127.0.0.1:8001/api/",
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: false,
});

export default clienteAxios;
