import httpClient from "./httpClient.service";

const END_POINT = "/api/product";

const getAllProducts = () => httpClient.get(`${END_POINT}/all`);



export {
    getAllProducts
}