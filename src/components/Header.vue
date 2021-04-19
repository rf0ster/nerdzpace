<template>
  <div
    class="header-fixed flex justify-between bg-surface dark:bg-surface-dark text-onSurface dark:text-onSurface-dark border-b border-gray dark:border-gray-dark"
  >
    <div class="header-padding ml-10">Nerds "R" Us</div>
    <div class="header-padding mr-10">
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
  },
};
</script>
<style scoped>
.header-fixed {
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
}
.header-padding {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
