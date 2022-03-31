<template>
  <section>
    <header>
      <h1>Carrinho</h1>
    </header>
    <main class="container" >
      <div v-if="pedidoTemProdutos">  
        <div
          v-for="itemPizza in pedido.itensPedido.pizzas"
          v-bind:key="itemPizza.id"
          class="item-pedido"
        >
          <h2>{{ itemPizza.qtd }}× {{ itemPizza.produto.nome }}</h2>
          <router-link :to="`/produto/${itemPizza.produto.id}/editar.`"><span class="btn-item-action">Editar</span></router-link>
          <span class="btn-item-action" @click="removerItem()">Remover</span>
          <p>{{ itemPizza.produto.ingredientes }}
          <p>Valor: R$ {{ itemPizza.qtd * itemPizza.produto.preco}}</p>
        </div>
      </div>
      <span class="carrinho-vazio" v-else>Dê uma olhada no nosso cardápio e coloca algo aqui! 🍕</span>
      <h2>
        Valor total: R$
        {{ valorTotal }}
      </h2>
      <label for="formaPagamento">Selecione a forma de pagamento:</label>
      <select v-model="pedido.formaPagamento">
        <option value="dinheiro">Dinheiro</option>
        <option value="debito">Cartão de débito</option>
        <option value="credito">Cartão de crédito</option>
      </select><br/>
      <label for="observacao">Adicione uma observação:</label>
      <textarea v-model="pedido.observacao" placeholder="Adicione alguma observação, deseja retirar as azeitonas? Calabresa sem cebola? Sem frescura, a gente faz pra ti 😃">
      </textarea><br/>
      <span>
        <span class="btn-realizar-pedido" @click="realizarPedido()">Realizar pedido</span>
      </span>
    </main>
  </section>
</template>

<script>
import PedidoService from '../services/PedidoService'
export default {
  data() {
    return {
      pedido: {
        id: '',
        nomeCliente: '',
        enderecoCliente: '',
        emailCliente: 'mock@gmail.com',
        itensPedido: {
          pizzas:[],
          bebidas:[]
        },
        formaPagamento: 'dinheiro',
        observacao: ''
      },
      valorTotal: 0
    };
  },

  computed: {
    pedidoTemProdutos() {
      return this.pedido.itensPedido?.pizzas?.length || this.pedido.itensPedido?.bebidas?.length
    }
  },

  mounted () {
    this.montarPedido()
    this.calcularValorTotalPedido()
  },

  methods: {
    async realizarPedido() {
      const { data } = await PedidoService.post(this.pedido)
      this.pedido.id = data.id
      alert(`O seu pedido foi enviado =)\nAcompanhe pelo rastreio utilizando o código do pedido: ${this.pedido.id}`)
      let historicoPedidos = localStorage.getItem('historicoPedidos') || '[]'
      historicoPedidos = JSON.parse(historicoPedidos)
      if (historicoPedidos) {
        historicoPedidos.push(this.pedido)
        localStorage.setItem('historicoPedidos', JSON.stringify(historicoPedidos))
      } else {
        historicoPedidos = []
        historicoPedidos.push(this.pedido)
        localStorage.setItem('historicoPedidos', JSON.stringify(historicoPedidos))
      }
      this.limpaPedidoAtual()
    },

    limpaPedidoAtual () {
      localStorage.setItem('itensPedido', '[]')
      this.formaPagamento = 'dinheiro'
      this.observacao = ''
      this.montarPedido()
      this.valorTotal = 0
    },

    montarPedido() {
      this.pedido.nomeCliente = localStorage.getItem('nomeCliente')
      this.pedido.enderecoCliente = localStorage.getItem('enderecoCliente')
      // this.pedido.emailCliente = localStorage.getItem('emailCliente') 
      this.pedido.itensPedido = JSON.parse(localStorage.getItem('itensPedido'))
    },

    calcularValorTotalPedido() {
      if (this.pedido.itensPedido?.pizzas?.length) {
        this.pedido.itensPedido.pizzas
          .map(pizza => {
            pizza.produto.pizzaId = pizza.produto.id
            return pizza
          })
          .forEach(pizza => {
            this.valorTotal += pizza.produto.preco * pizza.qtd
        })
      }

      if (this.pedido.itensPedido?.bebidas?.length) {
        this.pedido.itensPedido.bebidas
          .map(bebida => {
            bebida.produto.pizzaId = bebida.produto.id
            return bebida
          })
          .forEach(bebida => {
            this.valorTotal += bebida.produto.preco * bebida.qtd
        })
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

.btn-item-action {
  display: inline-block;
  padding: 5px;
  font-size: x-large;
  color: white;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
  margin: 0.2em;
}

.btn-item-action::before {
  display: inline-block;
}

select {
  font-size: large;
}

.container div {
  flex-flow: column wrap;
}

.item-pedido {
  border-bottom: 5px black dashed;
  padding-left: 0.5em;
  /* background-color: lime; */
  margin: 1em 0;
  padding-bottom: 1em;
}

textarea {
  font-size: large;
  padding: 0.2em;
  resize: none;
}

.carrinho-vazio {
  text-align: center;
  color: lightgray;
  padding: 1em;
}
</style>
