import axios, { AxiosResponse } from "axios";

export const getRequest = <T,>(url: string, callback: (res: T) => void) => {
  axios
    .get(url)
    .then((res: AxiosResponse) => callback(res.data))
    .catch((error) => {
      console.error("Error:", error);
    });
};
