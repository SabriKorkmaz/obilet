import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:54761/Home',
    // timeout: 5000,
  
});

export const makeRequest = (type, path, body, callback) => {
    instance[type](path, body)
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error)
        });
}

