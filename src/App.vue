<template>
  <div
    class="h-screen bg-background dark:bg-background-dark text-on_background dark:text-on_background-dark"
  >
    <Header user="riley" />
    <Content></Content>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  props: {
    user: String,
  },
  components: {
    Header,
    Content,
  },
};
</script>
