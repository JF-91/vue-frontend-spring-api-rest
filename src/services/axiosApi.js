import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/products/";
const apiSerice = {
    GET(payload={}) {
        return new Promise((resolve, reject) => {
            axios.get(payload.url, {params: {data: payload.data}})
                .then(result => {
                    if (result.status >= 200 && result.status < 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    GET_BY_ID(payload={}) {
        return new Promise((resolve, reject) => {
            axios.get(payload.url, {params: {id: payload.id}})
                .then(result => {
                    if (result.status >= 200 && result.status < 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    POST(payload={}) {
        return new Promise((resolve, reject) => {
            axios.post(payload.url, payload.data)
                .then(result => {
                    if (result.status >= 200 && result.status < 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    PUT(payload={}) {
        return new Promise((resolve, reject) => {
            axios.put(payload.url, payload.data)
                .then(result => {
                    if (result.status === 200 && result.status > 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    DELETE(payload={}) {
        return new Promise((resolve, reject) => {
            axios.delete(payload.url)
                .then(result => {
                    if (result.status === 200 && result.status > 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    GET_WITH_TOKEN(payload={}) {
        return new Promise((resolve, reject) => {
            axios.get(payload.url, {headers: {Authorization: `Bearer ${payload.token}`}})
                .then(result => {
                    if (result.status === 200 && result.status > 300) {
                        resolve(result.data);
                    }else{
                        reject();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

}

export default apiSerice;