import { shoporderApi } from "./path/shoporder";
import { userApi } from "./path/user";

export const api = {
  ...userApi,
  ...shoporderApi,
};
