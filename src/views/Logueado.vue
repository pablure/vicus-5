<template>
  <Titulo texto="Ruta con parametros"/>
  <h2>Parametro: {{ $route.params.id }}</h2>
  <DatosLogueado />
</template>

<script>
import Titulo from '../components/Titulo'
import DatosLogueado from '../components/DatosLogueado.vue'
export default {
    components:{
        Titulo, DatosLogueado
    }
}
</script>

<style>

</style>