<template>
  <div id="info">
      <h4 >Usuarios sin Comunidad asignada</h4>
      <div class="element">
          <label for="">Usuario nuevo:</label>
            <select class="input" name="zona" id="zona">
                <option name="lomas" value="Piscina">Tatina Gago Rajal</option>
                <option name="egeo" value="Pista de Padel">María José Martínez</option>                
            </select>
      </div>
      <div class="element">
          <label for="">Asignar Comunidad:</label>
            <select class="input" name="zona" id="zona">
                <option name="lomas" value="Piscina">Lomas del Cañaveral</option>
                <option name="egeo" value="Pista de Padel">Mar Egeo</option>
                <option name="caspio" value="Sala 1">Mar Caspio</option>          
            </select>
      </div>
      <input id="boton" type="submit" value="ASIGNAR">   
  </div>
</template>

<script>
export default {
    name: 'AdminUsuarios'
    
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
    margin-bottom: 15px;
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
</style>