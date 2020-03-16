/**
 *  @version: 1.1.0
 *  @author: Sergio - Trejocode
 *  @description: Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param: {string} url: "/EndPoint"
 *  @param: {Object} data: Payload
*/

import request from "superagent";

// Web API URL
const baseUrl = 'http://localhost:8081';

class Request {

    get(url, data) {
        const result = request
            .get(baseUrl + url)
            .query(data)
            .then(response => {
                const { error } = response.body;
                if (error) {
                    return { error: { message: error.message } };
                } else {
                    return { result: response.body, statusCode: response.status };
                }
            })
            .catch(error => {
                const { status } = error;
                if (status >= 400) {
                    return { error: { message: error.message, statusCode: status } };
                }
                return { error: { message: error.message, statusCode: 503 } };
            });
        return result;
    }

    post(url, data) {
        const result = request
            .post(baseUrl + url)
            .send(data)
            .then(response => {
                const { error } = response.body;
                if (error) {
                    return { error: { message: error.message } };
                } else {
                    return { result: response.body, statusCode: response.status };
                }
            })
            .catch(error => {
                return { error: { message: error.message, statusCode: 503 } };
            });
        return result;
    }    

    delete(url, data) {
        const result = request
            .delete(baseUrl + url)
            .send(data)
            .then(response => {
                const { error } = response.body;
                if (error) {
                    return { error: { message: error.message } };
                } else {
                    return { result: response.body, statusCode: response.status };
                }
            })
            .catch(error => {
                return { error: { message: error.message, statusCode: 503 } };
            });
        return result;
    }

    put(url, data) {
        const result = request
            .put(baseUrl + url)
            .send(data)
            .then(response => {
                const { error } = response.body;
                if (error) {
                    return { error: { message: error.message } };
                } else {
                    return { result: response.body, statusCode: response.status };
                }
            })
            .catch(error => {
                return { error: { message: error.message, statusCode: 503 } };
            });
        return result;
    }

    patch(url, data) {
        const result = request
            .patch(baseUrl + url)
            .send(data)
            .then(response => {
                const { error } = response.body;
                if (error) {
                    return { error: { message: error.message } };
                } else {
                    return { result: response.body, statusCode: response.status };
                }
            })
            .catch(error => {
                return { error: { message: error.message, statusCode: 503 } };
            });
        return result;
    }

}

export default Request;
