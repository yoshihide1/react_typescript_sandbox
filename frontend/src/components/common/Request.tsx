import axios, { AxiosResponse } from 'axios';

export const getRequest = <T,>(url: string, callback: (res: T) => void) => {
  axios
    .get(url)
    .then((res: AxiosResponse) => callback(res.data))
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const postRequest = <T,>(url: string, params: T) => {
  axios
    .post(url, params)
    .then((res: AxiosResponse) => console.log('success:', res))
    .catch((error) => {
      console.error('Error: ', error);
    });
};
