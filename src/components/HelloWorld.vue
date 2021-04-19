<template>
  <div class="text-primary dark:text-primary-dark">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
