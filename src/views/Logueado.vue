<template>
  <Titulo texto="Usuario registrado"/>
  <!--<h2>Parametro: {{ $route.params.id }}</h2>-->
  <div class="elementos">
    <DatosLogueado />
    <AccionesUsuario /> 
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
import AccionesUsuario from '../components/AccionesUsuario.vue'
import DatosLogueado from '../components/DatosLogueado.vue'
export default {
    components:{
        Titulo, DatosLogueado, AccionesUsuario
    }
}
</script>

<style scoped>
.elementos{
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 90%;

}
</style>