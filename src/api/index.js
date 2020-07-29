/**
 *  @version 1.0.0
 *  @author Trejocode - Sergio
 *  @description Cliente HTTP para todas las peticiones Web
*/

import axios from 'axios';
const baseUrl = process.env.API_ENDPOINT;

/**
 * @description Realizar petición HTTP GET
 * @param { String } endpoint: Endpoint de la solicitud
*/
export const get = async (endpoint) => {

    try {
        const { data } = await axios.get(`${baseUrl}${endpoint}`, {
            headers: {
                'artc_api_key': process.env.API_KEY
            }
        });
        return { data };
    } catch (error) {
        if (error.response){
            return { error: error.response.data };
        } else {
            return { error: error.message };
        }
    }

};


/**
 * @description Realizar petición HTTP POST
 * @param { String } endpoint: Endpoint de la solicitud
 * @param { Object } payload: Objecto body de la solicitud
*/
export const post = async (endpoint, payload) => {

    try {
        const { data } = await axios.post(`${baseUrl}${endpoint}`, payload, {
            headers: {
                'artc_api_key': process.env.API_KEY
            }
        });
        return { data };
    } catch (error) {
        if (error.response) {
            return { error: error.response.data };
        } else {
            return { error: error.message };
        }
    }

};