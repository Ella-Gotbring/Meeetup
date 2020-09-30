<template>
  <div class="register">
    <h3 class="message">{{ message }}</h3>
    <form class="form">
      <label for="text">Username</label>
      <input type="text" v-model="user.name" />

      <label for="email">Email</label>
      <input type="email" v-model="user.email" />

      <label for="password">Password</label>
      <input type="password" v-model="user.password" />

      <router-link class="button" to="/Page" tag="button">Register</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      message: "Register to meetupp",
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type="email"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.button {
  background-color: #6fa4c7;
  border: none;
  color: white;
  padding: 16px 30px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
