<template>
  <div
    class="aniron content-container content-image opacity-50 dark:content-image-dark text-onBackground dark:text-onBackground-dark"
    :class="theme"
    v-on:click="click"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      darkMode: false,
    };
  },
  methods: {
    click: function () {
      let el = document.getElementsByTagName("html").item(0);

      if (el.className === "dark") {
        el.className = "light";
      } else {
        el.className = "dark";
      }

      this.darkMode = el.className === "dark";
    },
  },
  computed: {
    theme: function () {
      return this.darkMode ? "content-image-dark" : "content-image-light";
    },
    position: function () {
      return "";
    },
    message: function () {
      return this.darkMode
        ? "You! Shall not, pass!!"
        : "Speak friend and enter...";
    },
  },
};
</script>

<style scoped>
.content-container {
  position: relative;
  height: calc(100vh - var(--header-height));
  font-size: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
.content-image-dark {
  background-image: url("../assets/Gandalf2.jpg");
  opacity: 0.2;
  text-align: left;
  padding-top: 100px;
  padding-left: 50px;
}
.content-image-light {
  background-image: url("../assets/Gandalf3.jpg");
  opacity: 0.5;
  text-align: center;
  padding-top: 50px;
}
</style>
