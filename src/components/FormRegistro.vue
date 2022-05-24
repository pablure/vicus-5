<template>
  <div id="form">
    <form onsubmit="event.preventDefault()">
      <div class="element">
        <label for="nombre">Nombre</label><br>
        <input v-model="formRegistro.nombre" type="text" id="nombre" name="nombre" required autofocus/>
      </div>
      <div class="element">
        <label for="apellidos">Apellidos</label><br>
        <input v-model="formRegistro.apellidos" type="text" id="apellidos" name="apellidos" required autofocus/>
      </div>
      <div class="element">
        <label for="login">Login</label><br>
        <input v-model="formRegistro.login" type="text" id="login" name="login" required autofocus/>
      </div>
      <div class="element">
        <label for="password">Contraseña</label><br>
        <input v-model="formRegistro.password" type="password" id="password" name="apellidos" required/>
      </div>
      <div class="element">
        <label for="password">Confirma contraseña</label><br>
        <input v-model="formRegistro.password2" type="password" id="password2" name="apellidos" required/>
      </div>
      <input type="submit" @click="crearUsuario" name="boton" value="Registrar"  id="boton">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FormRegistro',
    data () {
      return {
        formRegistro: {
          nombre: '',
          apellidos: '',
          login: '',
          password: '',
          password2: ''          
        }
      }
    },
    methods: {
      async crearUsuario () {
        const response = await axios.post('http://localhost/api/?servicio=registrar_usuario', {
          nombre: this.formRegistro.nombre,
          apellidos: this.formRegistro.apellidos,
          login: this.formRegistro.login,
          password: this.formRegistro.password
        })

        if (response.data.resultado === 'ok') {
        console.log('Usuario registrado')

        localStorage.login = response.data.login
        localStorage.id_usuario = response.data.id

        this.$router.push(`/${localStorage.login}`)
        this.resetInputs()
      } else {
        if (response.data.resultado === 'login_usuario_ya_existe') {
          console.log('Ya existe ese login')
        }
      }
    },
    resetInputs () {
      this.formRegistro.login = ''
      this.formRegistro.password = ''
      this.formRegistro.nombre = ''
      this.formRegistro.apellidos = ''
    }
  }
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
  transition: all 300ms;
}
#boton:hover{
  background-color: #c219ce;
  color: white;
}
</style>