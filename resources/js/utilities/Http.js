import axios from 'axios';
import { useState, useEffect } from 'react';
import * as Constant from './Const';

 axios.defaults.baseURL = Constant.BASE_API_URL;

export const useAxios = ({ url, method, body = null, headers = null }) => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(true);
    
    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
}


export const jsonHeaders = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
}



export async function submitForm({ url, formData }) {
    let response = {};

    let headers = {
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Content-Type': 'text/html'
    }

    await axios.post(url, formData, {
        headers: headers
    })
      .then(function (res) {
        response = {
            status  : "success",
            message : res.data,
        }
      })
      .catch(function (error) {

        if (error.response) {
            response = {
                status : "failure",
                errors : error.response.data.errors
            } 
        }
        else {
            response = {
                status : 'timeout',
                errors : 'Connection timed out'
            }
        }

      });
      
      return response


}

    
