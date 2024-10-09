import axios, { AxiosResponse } from "axios";

export const getRequest = <T,>(url: string, callback: (res: T) => void) => {
  axios
    .get(url)
    .then((res: AxiosResponse) => callback(res.data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const postRequest = <T,>(url: string, params: T, callback: () => void) => {
  axios
    .post(url, params)
    .then((res: AxiosResponse) => {
      console.log("success:", res);
      callback();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

export const deleteRequest = (url: string, callback: () => void) => {
  axios
    .delete(url)
    .then((res: AxiosResponse) => {
      console.log("success:", res);
      callback();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
