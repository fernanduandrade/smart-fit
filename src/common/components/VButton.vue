<script lang="ts" setup>
defineProps({
  primary: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button class="app__button" :style="`background-color: ${primary ? '#FFB610' : '#FFFFFF'}; border: ${primary ? 'none' : '1px solid var(--light-grey)'}`">
    <slot></slot>
  </button>
</template>

<style scoped>
.app__button {
  width: 30%;
  padding: 20px;
  color: var(--dark-grey);
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  transition: all .2s ease;
  font-size: 18px;
}

.app__button:hover {
  cursor: pointer;
  opacity: 0.8
}

@media (max-width: 600px) {
  .app__button {
    width: 100%;
  }
}
</style>