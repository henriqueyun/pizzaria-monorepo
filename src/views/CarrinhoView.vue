<template>
  <section>
    <header>
      <h1>Carrinho</h1>
    </header>
    <main class="container">
      <div
        v-for="itemPedido in itemsPedido"
        v-bind:key="itemPedido.id"
        class="item-pedido"
      >
        <h2>{{ itemPedido.qtd }}× {{ itemPedido.sabor }}</h2>
        <p>{{ itemPedido.ingredientes.join(", ") }}</p>
        <p>Valor: R$ {{ itemPedido.qtd * itemPedido.preco }}.00</p>
      </div>
      <hr />
      <h2>
        Valor total: R$
        {{
          itemsPedido.reduce((acc, item) => {
            return item.preco * item.qtd;
          })
        }}.00
      </h2>
      <label for="formaPagamento">Selecione a forma de pagamento:</label>
      <select>
        <option value="">Dinheiro</option>
        <option value="">Cartão de débito</option>
        <option value="">Cartão de crédito</option>
      </select><br/>
      <span>
        <span class="btn-realizar-pedido" @click="realizarPedido()"
          >Realizar pedido</span
        >
      </span>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      itemsPedido: [
        {
          id: 1,
          qtd: 2,
          sabor: "Muçarela",
          ingredientes: [
            "Queijo muçarela",
            "molho de tomates",
            "tomates",
            "azeitonas",
          ],
          preco: "42.00",
          imgURL: "/pizza1.png",
        },
        {
          id: 2,
          qtd: 1,
          sabor: "Calabresa",
          ingredientes: [
            "Calabresa fatiada",
            "cebola",
            "molho de tomates",
            "tomates",
            "azeitonas",
          ],
          preco: "42.00",
          imgURL: "/pizza1.png",
        },
      ],
    };
  },
  methods: {
    realizarPedido() {
      alert("Ainda não tá pronto");
    }
  },
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
