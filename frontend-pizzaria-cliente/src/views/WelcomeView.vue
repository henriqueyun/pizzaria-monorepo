<template>
  <div class="container">
    <span class="title-wrapper">
      <div class="health-check" v-show="this.isLoading">
        <h1>Checando Saúde da API</h1>
        <p>Estamos verificando se a API que serve essa aplicação está online...</p>
        <h1 class="pizza-loader">🍕</h1>
      </div>
      <template v-if="this.isLoading">
        <br/>
        <br/>
      </template>
      <div class="health-check" v-show="!this.isAPIOnline">
        <h1>A API do serviço não está online no momento</h1>
        <p>Tente novamente em instantes. Caso o erro persista, entre em contato com henriqueyun@gmail.com</p>
      </div>
      <template v-if="!this.isAPIOnline">
        <br/>
        <br/>
      </template>
      <h1 v-if="isACustomer()">Bem vindo novamente à Projeto Pizzaria {{ nomeCliente}},</h1>
      <h1 v-else>Bem vindo à Projeto Pizzaria,</h1>
      <p v-if="isACustomer()">Informe o endereço de entrega, escolha algo do cardápio que vamos preparar e entregar com todo carinho!</p>
      <p v-else>Informe o seu endereço, cheque o cardápio e faça já o seu pedido!</p>
    </span>
    <img src="../assets/bg.png"/>
    <p>A melhor escolha para todos os cenários seja <b> um pedaço para cada amigo</b>, <b>uma meio-a-meio para com o seu par</b> ou <b>oito pedaços só pra sí mesmo</b>.</p>
    <i>Pizzas são a melhor pedida.</i>
  </div>
</template>

<script>
import HealthService from '../services/HealthService'

export default {
  name: 'WelcomeView',
  data () {
    return {
      nomeCliente: '',
      isAPIOnline: true,
      isLoading: false,
    }
  },

  mounted () {
    if (localStorage.nomeCliente) {
      this.nomeCliente = localStorage.getItem('nomeCliente')
    }

    this.healthCheck()
  },

  methods: {
    isACustomer () {
      return this.nomeCliente
    },
    async healthCheck () {
      try {
        this.isLoading = true
        await HealthService.checarHealth()
        this.isAPIOnline = true
      } catch (error) {
        this.isAPIOnline = false
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 3em;
  }
  .title-wrapper{
    margin-top: 6em;
  }

  h1, p {
    text-align: center;
  }

  img {
    align-self: center;
    max-width: 100%;
    border: dashed 3px black;
    margin: 5em;
  }span

  .pizza-loader {
    animation: spinner 1.5s linear infinite; 
  }

  .health-check {
    border: 3px solid tomato;
    border-radius: 4px;
    padding: 20px 12px ;
  }
  
  @keyframes spinner {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    .container {
      width: 90%;
    }
    .title-wrapper{
      margin-top: 2em;
    }
    img {
      margin: 3em;
    }
  }
</style>