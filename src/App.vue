<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/registro">Regístrate</router-link> |
    <router-link to="/login">Login</router-link> |
    <a href="https://landing-vicus.netlify.app" target="_blank">Landing</a>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  /*color: #2c3e50;*/
  color: white;
}
body{
  height: 100vh;
   /*background-color: aqua; */
   background: radial-gradient(rgb(188, 16, 240), rgb(119, 5, 153));
  }

nav a.router-link-exact-active {
  /*color: #42b983;*/
  /*color: #c219ce;*/
  color: rgb(223, 144, 213);
}
</style>
