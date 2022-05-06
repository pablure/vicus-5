<template>
  <div id="formulario" class="">
    <h1 class="">Registrate en VICUS</h1>
    <form action="#" method="post" class="">
      <div class="">
        <label for="nombre">Nombre</label><br>
        <input v-modelo="FormData.nombre" type="text" id="nombre" name="nombre" value="" class="" required autofocus/>
      </div>
      <div class="">
        <label for="apellidos">Apellidos</label><br>
        <input v-modelo="FormData.apellidos" type="text" id="apellidos" name="apellidos" value="" class="" required autofocus/>
      </div>
      <div class="">
        <label for="login">Login</label><br>
        <input v-modelo="FormData.login" type="text" id="login" name="login" value="" class="" required autofocus/>
      </div>
      <div class="">
        <label for="apellidos">Contraseña</label><br>
        <input v-modelo="FormData.password" type="password" id="apellidos" name="apellidos" value="" class="" required/>
      </div>
      <div class="">
        <label for="apellidos">Contraseña</label><br>
        <input type="password" id="apellidos" name="apellidos" value="" class="" required/>
      </div>
      <input type="submit" name="boton" @click="crearUsuario" value="Registrar"  id="boton" class="">
    </form>
  </div>
</template>

<script>
export default {
    name: 'FormRegistro'
}
</script>

<style scoped>

</style>