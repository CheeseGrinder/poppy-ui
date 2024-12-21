<script setup lang="ts">
import { PopButton, PopInput, PopSelect, PopSelectOption } from '@poppy-ui/vue';
import { reactive } from 'vue';

const fields = reactive({
  name: '',
  choice: 'option 1',
});

function submit(ev: Event) {
  const data = new FormData(ev.target as HTMLFormElement);
  console.log('submit', Object.fromEntries(data));
}
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>

  <form
    id="test"
    @submit.prevent="submit"
  >
    <PopButton
      type="submit"
      form="test"
      outlined
    >
      button poppy
    </PopButton>
    <PopSelect v-model="fields.choice" name="choice" placeholder="placeholder" bordered required>
      <span slot="label">label</span>
      <PopSelectOption :value="''">Select option</PopSelectOption>
      <PopSelectOption :value="1">option 1</PopSelectOption>
      <PopSelectOption :value="2">option 2</PopSelectOption>
      <PopSelectOption :value="3">option 3</PopSelectOption>
      <PopSelectOption :value="4">option 4</PopSelectOption>
    </PopSelect>

    <PopInput v-model="fields.name" name="name" placeholder="placeholder">
      label
    </PopInput>
  </form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
