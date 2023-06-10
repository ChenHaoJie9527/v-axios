<template>
  <div>
    <NButton :loading="isLoading" @click="onHandleUser">获取 user 信息</NButton>
    <NButton :loading="_isLoading" @click="onHandleTest"
      >获取 test 数据</NButton
    >
    <NButton :loading="_isLoadingV1" @click="onHandleUserList">
      获取 list 信息
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";
import { api } from "../api";

const isLoading = ref(false);
const _isLoading = ref(false);
const _isLoadingV1 = ref(false);

const { getUserInfo, getUserName, getUserList } = api;
const onHandleUser = async () => {
  isLoading.value = true;
  const result = await getUserInfo("/user", {
    name: "user",
    age: 18,
  });
  if (result) {
    isLoading.value = false;
  }
};

const onHandleTest = async () => {
  _isLoading.value = true;
  await getUserName("/test", {
    name: "chj",
  });
  _isLoading.value = false;
};

const onHandleUserList = async () => {
  _isLoadingV1.value = true;
  try {
    await getUserList("/userList", {
      uid: 1,
      tokenId: "0x14",
    });
    _isLoadingV1.value = false;
  } catch (error) {
    _isLoadingV1.value = false;
  }
};
</script>

<style></style>
