import { Get } from "../../server";

const urlSuffix = "/api";

export async function gerUserInfo(url: string) {
  const [err, result] = await Get(`${urlSuffix}/${url}`, {});
}

export function getUserName() {}

export const userApi = {
  gerUserInfo,
  getUserName,
};
