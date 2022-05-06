<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Logo.png">
    <Titulo texto="Bienvenido a VICUS"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '../components/Titulo.vue'

export default {
  name: 'HomeView',
  components: {
    Titulo
  }
}
</script>
