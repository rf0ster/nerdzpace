<template>
  <div
    class="flex flex-col opacity-60 justify-center aniron w-screen h-screen bg-moria"
  >
    <div
      class="flex flex-col bg-surface text-onSurface mr-auto ml-auto pt-3 h-1/2 w-1/4 rounded-3xl b-shad"
    >
      <div class="ml-auto mr-auto">Speak friend and enter...</div>
      <div class="ml-auto mr-auto pt-10 flex flex-col justify-center">
        <TextInput
          class="mt-15"
          id="email"
          name="Email"
          placeholder="email address..."
        />
        <TextInput
          class="mt-8"
          id="password"
          name="Password"
          placeholder="password..."
        />
      </div>
      <Button class="mt-auto ml-auto mr-auto mb-3" name="Login" id="login" />
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    TextInput,
    Button,
  },
};
</script>

<style scoped>
.bg-moria {
  background-image: url("../assets/Moria.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.b-shad {
  box-shadow: 30px 25px 30px;
  border: 1px solid;
  border-style: ridge;
}
</style>
