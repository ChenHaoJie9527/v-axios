<template>
  <div>
    <NButton :loading="isLoading" @click="onHandleUser">获取 user 信息</NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";
import { api } from "../api";

const isLoading = ref(false);

const { getUserInfo } = api;
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
</script>

<style></style>
