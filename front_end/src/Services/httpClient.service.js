import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default httpClient;