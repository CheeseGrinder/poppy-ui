<script setup lang="ts">
import { PopButton, PopSelect, PopSelectOption } from '@poppy-ui/vue';
import HelloWorld from './components/HelloWorld.vue';
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
    @submit.prevent="() => console.log('submit')"
  >
    <PopButton
      type="submit"
      form="test"
      outlined
    >
      button poppy
    </PopButton>
    <PopSelect placeholder="placeholder">
      <span slot="label">label</span>
      <PopSelectOption>option 1</PopSelectOption>
      <PopSelectOption>option 2</PopSelectOption>
      <PopSelectOption>option 3</PopSelectOption>
      <PopSelectOption>option 4</PopSelectOption>
    </PopSelect>
  </form>
  <HelloWorld msg="Vite + Vue" />
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
