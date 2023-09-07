<template>
  <div class="container">
    <h1>Login:</h1>
    <br/>
    <label for="username">Username:</label>
    <input v-model="username" type="text" name="username">
    <label for="password">Password:</label>
    <input v-model="password" @keyup.enter="login()" type="password" name="password">
    <button @click="login()">Entrar</button>
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js'

export default {
  name: 'LoginView',

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async login () {
      try {
        await AuthService.login(this.username, this.password)
        this.$router.push('/')

        // todo: remover essa linha abaixo! foi única forma que encontrei fazer para o botão "sair" aparecer ao logar
        this.$parent.$children[0].setJwt() 
      } catch (err) {
        console.error(err)
        alert('Usuário ou senha inválidos!')
      }
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    display: flex;
    max-width: 400px;
    flex-flow: column wrap;
    justify-content: center;
    font-size: x-large;
    padding-top: 5em;
  }

  input {
    margin: 1em 0;
    padding: 5px;
    width: 100%;
    font-size: large;
  }

  button {
    padding: 5px;
    font-size: x-large;
    cursor: pointer;
  }
</style>