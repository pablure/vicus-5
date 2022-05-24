<template>
  <div id="info">
      <h4 >Lomas del Cañaveral</h4>
      <div class="element">
          <label for="">Piscina:</label>
            <select class="input" name="zona" id="zona">
                <option name="activa" value="Piscina">ACTIVA</option>
                <option name="inactiva" value="Pista de Padel">INACTIVA</option>                
            </select>
            <input type="radio" name="tiempo" value="1 día" disabled>1 día
            <input type="radio" name="tiempo" value="indefinido" disabled>indefinido
      </div>
      <div class="element">
          <label for="">Pista de Padel:</label>
            <select class="input" name="zona" id="zona">
                <option name="activa" value="Piscina">ACTIVA</option>
                <option name="inactiva" value="Pista de Padel" selected>INACTIVA</option>          
            </select>
            <input type="radio" name="tiempo" value="1 día">1 día
            <input type="radio" name="tiempo" value="indefinido" checked>indefinido
      </div>
      <div class="element">
          <label for="">Sala 1:</label>
            <select class="input" name="zona" id="zona">
                <option name="activa" value="Piscina">ACTIVA</option>
                <option name="inactiva" value="Pista de Padel">INACTIVA</option>          
            </select>
            <input type="radio" name="tiempo" value="1 día" disabled>1 día
            <input type="radio" name="tiempo" value="indefinido" disabled>indefinido
      </div>      
  </div>
</template>

<script>
export default {
    name: 'AdminZonas'
    
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
    margin-right: 10px;
    margin-bottom: 15px;
}
.input{
    
    margin-left: 10px;
}

</style>