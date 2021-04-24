<template>
  <div class="flex flex-col">
    <label :for="id">{{ name }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :class="{ 'border border-error dark:border-error-dark': !valid }"
      class="mt-2 p-2"
      @change="change"
    />
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "placeholder", "type", "valid"],
  methods: {
    change: function (event) {
      this.$emit("newValue", event.target.value);
    },
  },
};
</script>
