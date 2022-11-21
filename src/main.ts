import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { useMessage } from "naive-ui";

(window as any).$message = useMessage();
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

createApp(App).mount("#app");
