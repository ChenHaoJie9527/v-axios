<template>
  <NMessageProvider>
    <NDialogProvider>
      <GlobalContainer />
    </NDialogProvider>
  </NMessageProvider>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import { NMessageProvider, NDialogProvider } from "naive-ui";
import GlobalContainer from "./components/common/global.vue";
import HelloWorld from "./components/HelloWorld.vue";

</script>

<style></style>
