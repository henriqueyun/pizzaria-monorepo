<template>
  <nav class="nav-bar">
    <router-link to="/"><h1>Pizzaria</h1></router-link>
    <ul class="nav-menu">
      <router-link :to="{ name: 'controle-pedidos' }"><li>Controle de pedidos</li></router-link>
      <router-link to="/"><li>Controle de pedidos</li></router-link>
      <router-link to="/pizzas"><li>Pizzas</li></router-link>
      <router-link to="/bebidas"><li>Bebidas</li></router-link>
      <li v-if="jwt" class="btn-sair" @click="sair()">Sair</li>
    </ul>
  </nav>  
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'NavBar',

  data() {
    return {
      jwt: ''
    }
  },

  mounted() {
    this.setJwt()
  },
  methods: {
    async sair () {
      await AuthService.logout(localStorage.jwt)
      this.$router.push('/login')
      localStorage.jwt = ''
      this.setJwt()
      this.$forceUpdate()
    },

    setJwt() {
      this.jwt = localStorage.jwt
    }
  },
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5em;
}

ul {
  list-style-type: none;
}

.nav-menu {
  display: flex;
}

li {
  margin: 1em;
}

a {
  color: white;
  text-decoration: none;
}

.btn-sair {
  cursor: pointer;
}
</style>