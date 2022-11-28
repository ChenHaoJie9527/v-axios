import { Get } from "../../server";

const urlSuffix = "/api";

export async function getUserInfo(
  url: string,
  query: { name: string; age: number }
) {
  const [err, result] = await Get(
    `${urlSuffix}/${url}?name=${query.name}&age=${query.age}`
  );
  if (!err && result?.data) {
    window.$message.success(result.message);
    return result;
  }
  return null;
}

export function getUserName() {}

export const userApi = {
  getUserInfo,
  getUserName,
};
