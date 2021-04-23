<template>
  <div>
    <button
      @mousedown="mouseDown"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      :id="id"
    >
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["name", "id"],
  methods: {
    mouseOver: function () {
      document.getElementById(this.id).focus();
    },
    mouseLeave: function () {
      document.getElementById(this.id).blur();
    },
    mouseDown: function () {},
  },
};
</script>

<style scoped>
button {
  padding: 8px;
}
button:active {
  opacity: 0.5;
}
</style>
