<template>
  <n-button type="primary" @click="onGetUserInfo"> 点击请求userInfo接口 </n-button>
</template>

<script setup lang="ts">
import { api } from "../api";
// const onInfo = () => {
//   window.$dialog.warning({
//     title: "warning",
//     content: "你确定？",
//     positiveText: "确定",
//     negativeText: "不确定",
//     onPositiveClick: () => {
//       window.$message.success("确定");
//     },
//     onNegativeClick: () => {
//       window.$message.error("不确定");
//     },
//   });
// };
const onGetUserInfo = async () => {
  await api.gerUserInfo("user")
}
</script>

<style></style>
