<template>
  <div class="acciones">
      <div class="element">
        <label for="comunidad">Comunidad</label>
        <input class="input" type="text" value="Lomas del Cañaveral">
      </div>
      <div class="element">
        <label for="zona">Zona Común</label>
        <select class="input" name="zona" id="zona">
          <option name="piscina" value="Piscina">Piscina</option>
          <option name="pista" value="Pista de Padel">Pista de Padel</option>
          <option name="sala1" value="Sala 1">Sala 1</option>
          <option name="sala2" value="Sala 2">Sala 2</option>
        </select>
      </div>
      <div class="element">
        <label for="fechaHora">Fecha y hora</label>
        <input class="input" type="text" Value="2022-05-29 10:00:00">
      </div>
      <input id="boton" type="submit" value="RESERVAR">   
  </div>
</template>

<script>
export default {
    name:'AccionesUsuario'
}
</script>

<style scoped>
.acciones{
  padding-top: 5px;
  padding-bottom: 5px;
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
    padding-bottom: 15px;
}
.element:first-child{
    margin-top: 25px;
}
.input{
    margin-left: 10px;
}
#boton{
  margin-bottom: 25px;
  border: none;
  width: 150px;
  height: 35px;
  margin-top: 15px;
  background-color: #e6a3eb;
  transition: all 300ms;  
}
#boton:hover{
  background-color: #c219ce;
  color: white;
}
</style>>