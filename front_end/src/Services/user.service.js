import httpClient from "./httpClient.service";

const END_POINT = "/api/user";

const singUp = (user) => httpClient.post(`${END_POINT}/singup`, user);

const singIn = (email, password) => httpClient.get(`${END_POINT}/signin/${email}/${password}`);



export { 
    singUp,
    singIn
}