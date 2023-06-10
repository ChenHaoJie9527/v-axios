import { shoporderApi } from "./path/shoporder";
import { userApi } from "./path/user";
import { getUserList } from "./path/list";

export const api = {
  ...userApi,
  ...shoporderApi,
  getUserList,
};
