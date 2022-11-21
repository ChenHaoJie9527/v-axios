<template>
  <n-button type="primary" @click="onInfo"> Primary </n-button>
</template>

<script setup lang="ts">
const onInfo = () => {
  window.$dialog.warning({
    title: "warning",
    content: "你确定？",
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: () => {
      window.$message.success("确定");
    },
    onNegativeClick: () => {
      window.$message.error("不确定");
    },
  });
};
</script>

<style></style>
