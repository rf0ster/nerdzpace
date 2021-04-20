<template>
  <div
    class="aniron header bg-surface dark:bg-surface-dark text-onSurface dark:text-onSurface-dark border-b border-gray dark:border-gray-dark"
  >
    <div class="header-item ml-10 text-lg">Nerdz'pace</div>
    <div class="header-item mr-10">
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
.header {
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
}
.header-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
