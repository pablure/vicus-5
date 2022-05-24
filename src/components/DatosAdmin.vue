<template>
  <div id="info">
      <h4 >ADMINISTRADOR</h4>
      <div class="element">
          <h5>Nombre: <span>Nombre ADMIN</span></h5>
        </div>
      <div class="element">
          <h5>Apellidos: <span>Apellido1 Apellid2</span></h5>
      </div>
      <div class="element">
          <label for="">Comunidad:</label>
            <select class="input" name="zona" id="zona">
                <option name="lomas" value="Piscina">Lomas del Cañaveral</option>
                <option name="egeo" value="Pista de Padel">Mar Egeo</option>
                <option name="caspio" value="Sala 1">Mar Caspio</option>          
            </select>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DatosAdmin'
    
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
.input{
    
    margin-left: 10px;
}
</style>