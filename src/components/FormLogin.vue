<template>
  <div id="form">
    <form action="#" method="post" class="form">
      <div class="element">
        <label for="login">Login</label><br>
        <input type="text" id="login" name="login" value="" class="" required autofocus/>
      </div>
      <div class="element">
        <label for="password">Contraseña</label><br>
        <input type="password" id="apellidos" name="apellidos" value="" class="" required/>
      </div>
      <input type="submit" name="boton" value="Entrar"  id="boton" class="">
    </form>
  </div>
</template>

<script>
export default {
    name: 'FormLogin'
}
</script>

<style scoped>
#form{
  margin: 0 auto;
  padding-top: 5px;
  width: 300px;
  border-radius: 5px;
  background-color: rgb(246, 216, 241);
  box-shadow: 0 3px 10px rgb(255 255 255 / 0.8);
}
.form{
  margin-top: 15px;
}
.element{
  text-align: left;
  margin-top: 5px;
  margin-left: 13px;
  padding: 5px;  
}
input{
  margin-top: 5px;
  width: 260px;
  height: 30px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
label{
  text-align: left;
  color: black;
  text-align:left;
}
#boton{
  margin-bottom: 25px;
  border: none;
  width: 150px;
  height: 35px;
  margin-top: 15px;
  background-color: #e6a3eb;
}
#boton:hover{
  background-color: #c219ce;
  color: white;
}
</style>