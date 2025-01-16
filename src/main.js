import { createApp } from "vue";
import "./assets/style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue, { theme: "none" }).mount("#app");
