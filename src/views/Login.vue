<template>
  <div
    class="flex flex-col opacity-60 justify-center aniron w-screen h-screen bg-moria"
  >
    <div
      class="flex flex-col bg-surface text-onSurface mr-auto ml-auto m-2 p-3 h-1/2 w-1/4 min-w-max overflow-y-hidden rounded-3xl b-shad"
    >
      <div class="ml-auto mr-auto">Speak friend and enter...</div>
      <div class="ml-auto mr-auto pt-10 flex flex-col justify-center">
        <TextInput
          class="mt-15"
          id="email"
          name="Email"
          type="email"
          placeholder="email address..."
          :valid="emailValid"
          @newValue="setEmail"
        />
        <TextInput
          class="mt-8"
          id="password"
          name="Password"
          type="password"
          placeholder="password..."
          :valid="passwordValid"
          @newValue="setPassword"
        />
      </div>
      <Button
        @click="login"
        class="mt-auto ml-auto mr-auto mb-1"
        name="Login"
        id="login"
      />
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
  data: function () {
    return {
      email: null,
      emailValid: true,
      password: null,
      passwordValid: true,
    };
  },
  methods: {
    setEmail: function (value) {
      this.email = value;
      this.validateEmail();
    },
    validateEmail: function () {
      this.emailValid =
        this.isEmpty(this.email) && this.validEmailFormat(this.email);
    },
    setPassword: function (value) {
      this.password = value;
      this.validatePassword();
    },
    validatePassword: function () {
      this.passwordValid = this.isEmpty(this.password);
    },
    login: function () {
      this.validateEmail();
      this.validatePassword();
    },
    isEmpty: function (str) {
      return str !== "" && str !== null && str !== undefined;
    },
    validEmailFormat: function (email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.bg-moria {
  background-image: url("../assets/Moria.jpg");
  background-repeat: no-repeat;
  background-position: center top; /* First value is from left and second is from top. You can use use number as well*/
  background-size: cover;
}
.b-shad {
  box-shadow: 30px 25px 30px;
  border: 1px solid;
  border-style: ridge;
}
</style>
