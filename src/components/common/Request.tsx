import axios, { AxiosResponse } from "axios";

export const getRequest = <T,>(
  url: string,
  //   params: { key: string; value: unknown },
  callback: (res: T) => void
) => {
  axios.get(url).then((res: AxiosResponse) => callback(res.data));
};
