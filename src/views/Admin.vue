<template>
  <Titulo texto="Administrador registrado"/>
  <!--<h2>Parametro: {{ $route.params.id }}</h2>-->
  <div class="elementos">
    <DatosAdmin />
    <AdminUsuarios />
    <AdminZonas />
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
import AccionesUsuario from '../components/AccionesUsuario.vue'
import DatosAdmin from '@/components/DatosAdmin.vue'
import AdminUsuarios from '@/components/AdminUsuarios.vue'
import AdminZonas from '../components/AdminZonas.vue'
export default {
    components:{
    Titulo,
    AccionesUsuario,
    DatosAdmin,
    AdminUsuarios,
    AdminZonas
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