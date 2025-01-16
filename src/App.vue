<script setup>
import { Button, DatePicker, Select } from "primevue";

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
]);

function enableDarkMode() {
    document.documentElement.classList.add("app-dark");
}

function disableDarkMode() {
    document.documentElement.classList.remove("app-dark");
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("app-dark");
}
</script>

<template>
    <div>
        <Button label="Light" @click="disableDarkMode"></Button>
        <Button label="Dark" @click="enableDarkMode"></Button>
        <Button label="Toggle" @click="toggleDarkMode"></Button>
        <DatePicker class="w-56"></DatePicker>
        <Select
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            class="w-full md:w-56"
        />
    </div>
</template>

<style scoped></style>
