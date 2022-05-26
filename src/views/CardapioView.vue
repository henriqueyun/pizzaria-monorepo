<template>
<section>  
    <header>
      <h1>Cardárpio</h1>
      <h2 v-if="temPizzas">Pizzas</h2>
    </header>
    <main class="container">
      <!-- <div class="card-pizza">
          <span>
            <img src="../assets/pizza1.png" alt="" srcset="../assets/pizza1.png">
          </span>
          <span class="card-pizza-text">
            <h2>Pizza de pipipi</h2>
            <p>Queijo, muçarela, tomate, muçarela, tomate, muçarela, tomate etc.</p>
          </span>
          <span class="card-pizza-action">
            <h2>R$ 40.00</h2>
            <router-link to="/adicionar_pizza/teste"><span>Pedir agora!</span></router-link>
          </span>
        </div>  
      
      <div class="card-pizza">
        <span>
          <img src="../assets/pizza2.png" alt="" srcset="../assets/pizza2.png">
        </span>
        <span class="card-pizza-text">
          <h2>Pizza de pipipi</h2>
          <p>Queijo, muçarela, tomate, muçarela, tomate, muçarela, tomate etc.</p>
        </span>
        <span class="card-pizza-action">
          <h2>R$ 40.00</h2>
          <router-link to="/adicionar_pizza/teste"><span>Pedir agora!</span></router-link>
        </span>
      </div>  

      <div class="card-pizza">
        <span>
          <img src="../assets/pizza3.png" alt="" srcset="../assets/pizza3.png">
        </span>
        <span class="card-pizza-text">
          <h2>Pizza de jijiji</h2>
          <p>Queijo, muçarela, tomate, muçarela, tomate, muçarela, tomate etc.</p>
        </span>
        <span class="card-pizza-action">
          <h2>R$ 35.00</h2>
          <router-link to="/adicionar_pizza/teste"><span>Pedir agora!</span></router-link>
        </span>
      </div>
      
      <div class="card-pizza">
        <span>
          <img src="../assets/pizza4.png" alt="" srcset="../assets/pizza4.png">
        </span>
        <span class="card-pizza-text">
          <h2>Pizza de pirulito pão doce</h2>
          <p>Queijo, muçarela, tomate, muçarela, tomate, muçarela, tomate etc.</p>
        </span>
        <span class="card-pizza-action">
          <h2>R$ 31.00</h2>
          <router-link to="/adicionar_pizza/teste"><span>Pedir agora!</span></router-link>
        </span>
      </div> -->
      <div v-for="pizza in pizzas" v-bind:key="pizza.id" class="card-pizza">
        <span class="img-wrapper">
          <img :src="pizza.imgURL" alt="" :srcset="pizza.imgURL"  >
        </span>
        <span class="card-pizza-text">
          <h2>{{ pizza.nome }}</h2>
          <p>{{ pizza.ingredientes }}.</p>
        </span>
        <span class="card-pizza-action">
          <h2>R$ {{ pizza.preco }}</h2>
          <router-link :to="`/pizza/${pizza.id}/adicionar`"><span>Pedir agora!</span></router-link>
        </span>
      </div> 
    </main>
    <header v-if="temBebidas">
      <h2>Bebidas</h2>
    </header>
    <main class="container">
      <div v-for="bebida in bebidas" v-bind:key="bebida.id" class="card-pizza">
        <span class="img-wrapper">
          <img :src="bebida.imgURL" alt="" :srcset="bebida.imgURL"  >
        </span>
        <span class="card-pizza-text">
          <h2>{{ bebida.nome }}</h2>
          <p>{{ bebida.volume }}ml</p>
          <b>{{ isAlcoolica(bebida.alcoolica) }}</b>
        </span>
        <span class="card-pizza-action">
          <h2>R$ {{ bebida.preco }}</h2>
          <router-link :to="`/bebida/${bebida.id}/adicionar`"><span>Pedir agora!</span></router-link>
        </span>
      </div> 
    </main>
  </section>
</template>

<script>
import BebidaService from '../services/BebidaService'

export default {
  data () {
    return {
      pizzas: [
        { id: 1, nome: 'Muçarela', ingredientes: 'Queijo muçarela, molho de tomates, tomates, azeitonas', preco: '42.00', imgURL: '/pizza1.png'}
      ],

      bebidas: []
    }
  },

  computed: {
    temPizzas () {
      return this.pizzas.length
    },

    temBebidas () {
      return this.bebidas?.length
    }
  },

  mounted () {
    this.buscarPizzas()
    this.buscarBebidas()
  },

  methods: {
    async buscarPizzas() {
      const pizzasResponse = await this.$axios.get(`${process.env.VUE_APP_API_URL}/api/v1/pizza/all`)
      this.pizzas = pizzasResponse.data
    },

    async buscarBebidas() {
      this.bebidas = await BebidaService.getAll()
    },

    isAlcoolica(alcoolica) {
      return alcoolica ? 'Alcoólica' : 'Não alcoólica'
    }
  }
}
</script>

<style scoped>
.card-pizza { 
  display: flex;
  padding: 1em;
  margin: 10px;
}

.card-pizza:hover { 
  background-color: lightgray;
  border-radius: 10px;
}

.card-pizza-text {
  padding: 0 1em;
  width: 250px;
  white-space: normal;
}

.card-pizza-action {
  display: flex; 
  flex-flow: column;
  justify-content: space-between;
}

.img-wrapper {
  width: 128px;
  height: 128px;
  background-color: gainsboro;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pizza img {
  width: 115px;
  height: 115px;
  border-radius: 10px;
}

.card-pizza-action span {
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
}

header h1 {
  font-size: xxx-large;
  margin-top: 50px;
  text-align: center;
}

header h2 {
  font-size: xx-large;
  margin-top: 50px;
  text-align: center;
}

.bg-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>