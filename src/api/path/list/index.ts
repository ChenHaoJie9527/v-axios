import { Get, Post } from "../../server";
import { checkResult } from "../../tool";

const urlSuffix = "/api";

const getUserList = async (
  url: string,
  params: {
    uid: number;
    tokenId: string;
  }
) => {
  const [err, result] = await Post(`${urlSuffix}/${url}`, params);
  return checkResult(err, result);
};

export { getUserList };
