<script setup lang="ts">
import { PopButton, PopInput, PopSelect, PopSelectOption } from '@poppy-ui/vue';
import testApp from '../package.json';
import poppyCore from '@poppy-ui/core/package.json';
// import poppyCoreOutput from '../../../packages/core/node_modules/@stencil/vue-output-target/package.json';
import poppyVueOutput from '../../../node_modules/@stencil/vue-output-target/package.json';
import poppyVue from '@poppy-ui/vue/package.json';
import { useForm } from './utils/form.util';

const { fields } = useForm<{ name: string; choice: 1 }>()

function submit() {
  console.log('submit', fields);
}
</script>

<template>
  <div>
    <section>
      <h2>@poppy-ui/core</h2>
      <div>@stencil/core: {{ poppyCore.dependencies['@stencil/core'] }}</div>
      <div>vue-output-target: {{ poppyCore.devDependencies['@stencil/vue-output-target'] }}</div>
      <div>vue-output-target (real): {{ poppyVueOutput.version }}</div>

    </section>
    <section>
      <h2>@poppy-ui/vue</h2>
      <div>vue-output-target: {{ poppyVue.dependencies['@stencil/vue-output-target'] }}</div>
      <div>vue-output-target (real): {{ poppyVueOutput.version }}</div>
    </section>
    <section>
      <h2>App test</h2>
      <div>@poppy-ui/vue Vue: {{ poppyVue.devDependencies.vue }}</div>
      <div>vue: {{ testApp.dependencies.vue }}</div>
    </section>
  </div>

  <form
    id="test"
    @submit.prevent="submit"
  >
    <div>
      <PopSelect ref="selectRef" v-model="fields.choice" name="choice" placeholder="placeholder" bordered required>
        <span slot="label">label</span>
        <PopSelectOption :value="1">option 1</PopSelectOption>
        <PopSelectOption :value="2">option 2</PopSelectOption>
        <PopSelectOption :value="3">option 3</PopSelectOption>
        <PopSelectOption :value="4">option 4</PopSelectOption>
      </PopSelect>

      <PopInput
        v-model="fields.name"
        name="name"
        placeholder="placeholder"
        @pop-change="console.log('change', $event)"
        @pop-input="console.log('input', $event)"
      >
        label
      </PopInput>
    </div>
    <PopButton type="submit" form="test" outlined>
      submit
    </PopButton>
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

div {
  padding: 10px
}
</style>
