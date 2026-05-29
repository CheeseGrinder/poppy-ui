<script setup lang="ts"></script>

<template>
  <figure class="diff" tabindex="0">
    <div class="diff-item-1" role="img" tabindex="0">
      <slot name="item-1"></slot>
    </div>
    <div class="diff-item-2" role="img">
      <slot name="item-2"></slot>
    </div>
    <div class="diff-resizer"></div>
  </figure>
</template>