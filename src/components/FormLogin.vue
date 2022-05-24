<template>
  <div id="form">
    <!--<form action="#" method="post" class="form">-->  
    <form onsubmit="event.preventDefault()">
      <div class="element">
        <label for="login">Login</label><br>
        <input v-model="datosFormulario.login" type="text" id="login" name="login"  required autofocus/>
      </div>
      <div class="element">
        <label for="password">Contraseña</label><br>
        <input v-model="datosFormulario.password" type="password" id="password" name="password" required/>
      </div>
      <input @click="logear" type="submit" name="boton" value="Entrar" id="boton">
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'FormLogin',
    data (){
        return {
            datosFormulario: {
            login: '',
            password: ''
            }
        }       
    },
    methods: {
        async logear () {
            const response = await axios.post('http://localhost/api/?servicio=login', {
                login: this.datosFormulario.login,
                password: this.datosFormulario.password
            })
            if (response.data.resultado === 'ok') {
                console.log('Usuario Registrado')
                this.resetInputs()

                localStorage.login = response.data.login
                localStorage.id_usuario = response.data.id

                this.$router.push(`/${localStorage.login}`)
                this.resetInputs()
        
            } else {
                if (response.data.data.resultado === 'no_ok') {
                    console.log('Usuario no Registrado')
                    this.resetInputs()
                }
            }
        },
        //resetInputs () {
          //  this.datosFormulario.login = ''
            //this.datosFormulario.password = ''
        //}
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