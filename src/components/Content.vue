<template>
  <div
    class="aniron content-container content-image opacity-50 dark:content-image-dark text-onBackground dark:text-onBackground-dark"
  ></div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-container {
  position: relative;
  height: calc(100vh - var(--header-height));
  text-align: center;
  padding-top: 5px;
  font-size: 20px;
}
.content-image {
  background-image: url("../assets/Gandalf3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
