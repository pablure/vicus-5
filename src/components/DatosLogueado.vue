<template>
  <div id="info">
      <h4 >Propietario</h4>
      <div class="element">
          <h5>Nombre: <span>Pablo</span></h5>
        </div>
      <div class="element">
          <h5>Apellidos: <span>Gago Rajal</span></h5>
      </div>
      <div class="element">
          <h5>Comunidad: <span>Lomas del Cañaveral</span></h5>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DatosLogueado'
    
}
</script>

<style scoped>
#info{
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  max-width: 100%;
  min-width: 345px;
  height: 200px;
  border-radius: 5px;
  color: black;
  background-color: rgb(246, 216, 241);
  box-shadow: 0 3px 10px rgb(255 255 255 / 0.8);
}
.element{
    text-align: left;
    margin-left: 10px;
}
span{
    font-weight: 400;
}
</style>