import axios from "axios";



const productInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export { productInstance };