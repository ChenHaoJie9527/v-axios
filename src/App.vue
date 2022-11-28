<template>
  <NMessageProvider :closable="true" :placement="'top'" :duration="5000">
    <NDialogProvider>
      <GlobalDialog />
    </NDialogProvider>
  </NMessageProvider>
  <HelloWorld></HelloWorld>
  <User />
</template>

<script setup lang="ts">
import { NMessageProvider, NDialogProvider } from "naive-ui";
import GlobalDialog from "./components/common/GlobalDialog.vue";
import HelloWorld from "./components/HelloWorld.vue";
import User from "./components/user.vue";
</script>

<style></style>
