<template>
  <div class="flex flex-col">
    <label :for="id">{{ name }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      class="mt-2 p-2"
    />
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "placeholder", "type"],
};
</script>
