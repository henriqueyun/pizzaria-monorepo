<template>
  <section>
    <header>
      <h1>Rastrear Meu Pedido</h1>
    </header>
    <main class="simple-container rastrear-pedido">
      <label for="nome">Código do pedido</label><br/>
      <input v-model="idPedidoBuscado" type="number" min="0" placeholder="Digite ou o código do pedido"/><br/><br/>
      <span @click="buscarPedidoId(idPedidoBuscado)">Buscar pedido</span>
    <section v-if="pedido.encontrado" class="dados-pedido">
      <h4>Pedido Nº{{ pedido.id }}</h4>
      <b>Status:</b>
      {{ pedido.status }}<br/><br/>
      <b>Itens:</b>
        <p v-for="itemPizza in this.pedido.pizzaItemPedidos" v-bind:key="itemPizza.id">
          {{ itemPizza.qtd }}× Pizza {{ itemPizza.pizza.nome }}
        </p>
        <p v-for="itemBebida in this.pedido.bebidaItemPedidos" v-bind:key="itemBebida.id">
          {{ itemBebida.qtd }}× Pizza {{ itemBebida.bebida.nome }}
        </p><br/>
      <b>Valor total:</b>
      R$ {{ calcularValorPedido() }}
    </section>
    </main>
  </section>
</template>

<script>
import PedidoService from '../services/PedidoService'

export default {
  data () {
    return {
      idPedidoBuscado: '',
      pedido: {
        id: '',
        status: '',
        pizzaItemPedidos: [],
        bebidaItemPedidos: [],
        encontrado: false
      },
    }
  },

  methods: {
    async buscarPedidoId (id) {
      this.pedido = await PedidoService.get(id)
      this.pedido.encontrado = true
    },
    
    calcularValorPedido () {
      let valorTotalPedido = 0
      this.pedido.pizzaItemPedidos.forEach(itemPizza => {
        valorTotalPedido += parseInt(itemPizza.qtd) * itemPizza.pizza.preco
      })
      this.pedido.bebidaItemPedidos.forEach(itemBebida => {
        valorTotalPedido += parseInt(itemBebida.qtd) * itemBebida.bebida.preco
      })
      return valorTotalPedido
    }
  }
}
</script>
<style scoped>
  .rastrear-pedido {
    font-size: x-large;
  }

  .rastrear-pedido input {
    margin-top: 1em;
    padding: 5px;
    width: 100%;
    font-size: large;
  }

  .rastrear-pedido span {
    float: right;
    padding: 5px;
    font-size: x-large;
    color: white;
    background-color: black;
    cursor: pointer;
  }
</style>