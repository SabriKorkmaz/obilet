import axios, { AxiosInstance } from "axios";

const instance:AxiosInstance = axios.create({
    baseURL: 'http://localhost:54761/Home',
    // timeout: 5000,
});

export const makeRequest = (type:keyof AxiosInstance, path:string, body:Request, callback:Function) => {
    instance[type](path, body)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error)
        });
}

