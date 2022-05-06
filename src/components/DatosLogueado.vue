<template>
  <div id="form">
      <h4>Administrador</h4>
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
#form{
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 80%;
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