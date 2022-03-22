<template>
  <section>
    <header>
      <h1>Carrinho</h1>
    </header>
    <main class="container" >
      <div v-if="itensPedido.length">  
        <div
          v-for="itemPedido in itensPedido"
          v-bind:key="itemPedido.id"
          class="item-pedido"
        >
          <h2>{{ itemPedido.qtd }}× {{ itemPedido.produto.nome }}</h2>
          <p>{{ itemPedido.produto.ingredientes }}
          <p>Valor: R$ {{ itemPedido.qtd * itemPedido.produto.preco}}</p>
        </div>
      </div>
      <hr />
      <h2>
        Valor total: R$
        {{ calcularValorTotalPedido() }}
      </h2>
      <label for="formaPagamento">Selecione a forma de pagamento:</label>
      <select>
        <option value="">Dinheiro</option>
        <option value="">Cartão de débito</option>
        <option value="">Cartão de crédito</option>
      </select><br/>
      <span>
        <span class="btn-realizar-pedido" @click="realizarPedido()">Realizar pedido</span>
      </span>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      itensPedido: [],
    };
  },

  mounted () {
    this.buscarItensPedido()
  },

  methods: {
    realizarPedido() {
      alert("Ainda não tá pronto");
    },
    
    buscarItensPedido() {
      this.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
      this.calcularValorTotalPedido()
    },

    calcularValorTotalPedido() {
      if (this.itensPedido.length) {
        return this.itensPedido.reduce((acc, item) => {
          return { produto: { preco: acc.produto.preco + item.produto.preco }}
        }).produto.preco
      } else {
        return 0
      }
    }
  }
};
</script>

<style scoped>
.container {
  flex-flow: column wrap;
  font-size: x-large;
}

.btn-realizar-pedido {
  padding: 5px;
  font-size: x-large;
  color: white;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
  float: right;
}

select {
  font-size: large;
}

hr {
  margin: 0.5em;
}
.container div {
  flex-flow: column wrap;
  margin: 10px;
}
</style>
