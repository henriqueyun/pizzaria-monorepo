<template>
  <div class="container">
    <span class="title-wrapper">
      <h1 v-if="isACustomer()">Bem vindo novamente à Projeto Pizzaria {{ nomeCliente}},</h1>
      <h1 v-else>Bem vindo à Projeto Pizzaria,</h1>
      <p v-if="isACustomer()">Informe o endereço de entrega, escolha algo do cardápio que vamos preparar e entregar com todo carinho!</p>
      <p v-else>Informe o seu endereço, cheque o cardápio e faça já o seu pedido!</p>
    </span>
    <img src="../assets/bg.png"/>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
  data () {
    return {
      nomeCliente: ''
    }
  },

  mounted () {
    if (localStorage.nomeCliente) {
      this.nomeCliente = localStorage.getItem('nomeCliente')
    }
  },

  methods: {
    isACustomer () {
      return this.nomeCliente
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 4em;
  }
  .title-wrapper{
    margin-top: 8em;
    margin-bottom: 4em;
  }

  h1, p {
    text-align: center;
  }

  img {
    align-self: center;
    max-width: 100%;
    border: dashed 3px black;
  }
</style>