<template>
  <section>
    <header>
      <h1>Rastrear Meu Pedido</h1>
    </header>
    <main class="simple-container rastrear-pedido">
      <label for="nome">Código do pedido</label><br/>
      <input v-model="idPedidoBuscado" type="nome" placeholder="Digite ou o código do pedido"/><br/><br/>
      <span @click="buscarPedidoId(idPedidoBuscado)">Buscar pedido</span>
    <section v-if="pedido.encontrado" class="dados-pedido">
      <p>O pedido de ID <b>{{ pedido.id }}</b> está com o status <b>{{ pedido.status }}</b></p>
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
        encontrado: false
      },
    }
  },

  methods: {
    async buscarPedidoId (id) {
      console.log('ue')
      this.pedido = await PedidoService.get(id)
      this.pedido.encontrado = true
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