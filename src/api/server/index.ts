// 通用操作封装

import axios from "axios";
import { ElMessage } from "element-plus";
import {
  handleAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
  handleRequestHeader,
} from "../tool";

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  errno: string;
  errmsg: string;
  data: T;
}

type Fn = (data: FcResponse<any>) => unknown;

axios.interceptors.request.use((config) => {
  config = handleRequestHeader(config);
  config = handleAuth(config);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);

    handleAuthError(response.data.errno);
    handleGeneralError(response.data.errno, response.data.errmsg);

    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    Promise.reject(err.response);
  }
);

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((res) => {
        let result: FcResponse<T>;
        if (clearFn !== undefined) {
          result = clearFn(res.data) as unknown as FcResponse<T>;
        } else {
          result = res.data as FcResponse<T>;
        }
        resolve([null, result]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};

export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {}
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((res) => {
        resolve([null, res.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
