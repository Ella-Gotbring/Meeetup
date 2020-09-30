<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/review">Review</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-image: linear-gradient(260deg, #8cddd4 0%, #f7c8f8 100%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
  padding: 8px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
