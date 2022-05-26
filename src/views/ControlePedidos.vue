<template>
  <div class="container">
    <h1>Controle de Pedidos</h1>
    <br/>
    <section>
      <div class="section-status">Entrada<div class="section-divider"></div></div>
        <table>
          <tr>
            <th>Número</th>
            <th>Itens</th>
            <th>Observação</th>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Ação</th>
          </tr>
          <tr v-for="entrada in pedidos.entradas" v-bind:key="entrada.id">
            <td>{{ entrada.id }}</td>
            <td class="td-ingredientes">
              <p v-for="itemPizza in entrada.pizzaItemPedidos" v-bind:key="itemPizza.id">
                {{ itemPizza.qtd }}× {{ itemPizza.pizza.nome }}
              </p>
            </td>
            <td>{{ entrada.observacao}}</td>
            <td>R$ {{ calcularValorPedido(entrada) }}</td>
            <td class="td-cliente">
              <p>{{ entrada.nomeCliente}}</p>
              <p>{{ entrada.telefoneCliente }}</p>
              <p>{{ entrada.enderecoCliente }}</p>
            </td>
            <td>
              <span class="td-flex-wrapper">
                <button @click="atualizarStatusPedido(entrada.id, 'confirmado')">Confirmar</button>
                <button @click="atualizarStatusPedido(entrada.id, 'recusado')">Recusar</button>
              </span>
            </td>
          </tr>
        </table>
      <!-- </ul> -->
    </section>


    <section>
      <div class="section-status">Confirmado<div class="section-divider"></div></div>
        <table>
          <tr>
            <th>Número</th>
            <th>Itens</th>
            <th>Observação</th>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Ação</th>
          </tr>
          <tr v-for="confirmado in pedidos.confirmados" v-bind:key="confirmado.id">
            <td>{{ confirmado.id }}</td>
            <td class="td-ingredientes">
              <p v-for="itemPizza in confirmado.pizzaItemPedidos" v-bind:key="itemPizza.id">
                {{ itemPizza.qtd }}× {{ itemPizza.pizza.nome }}
              </p>
              <p v-for="itemBebida in confirmado.bebidaItemPedidos" v-bind:key="itemBebida.id">
                {{ itemBebida.qtd }}× {{ itemBebida.bebida.nome }}
              </p>
            </td>
            <td>{{ confirmado.observacao}}</td>
            <td>
              R$ {{ calcularValorPedido(confirmado) }}
              {{ confirmado.formaPagamento }}
            </td>
            <td class="td-cliente">
              <p>{{ confirmado.nomeCliente}}</p>
              <p>{{ confirmado.telefoneCliente }}</p>
              <p>{{ confirmado.enderecoCliente }}</p>
            </td>
            <td>
              <span class="td-flex-wrapper">
                <button @click="atualizarStatusPedido(confirmado.id, 'preparo')">Confirmar</button>
              </span>
            </td>
          </tr>
        </table>
    </section>

    <section>
      <div class="section-status">Preparando<div class="section-divider"></div></div>
        <table>
          <tr>
            <th>Número</th>
            <th>Itens</th>
            <th>Observação</th>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Ação</th>
          </tr>
          <tr v-for="preparando in pedidos.emPreparo" v-bind:key="preparando.id">
            <td>{{ preparando.id }}</td>
            <td class="td-ingredientes">
              <p v-for="itemPizza in preparando.pizzaItemPedidos" v-bind:key="itemPizza.id">
                {{ itemPizza.qtd }}× {{ itemPizza.pizza.nome }}
              </p>
              <p v-for="itemBebida in preparando.bebidaItemPedidos" v-bind:key="itemBebida.id">
                {{ itemBebida.qtd }}× {{ itemBebida.bebida.nome }}
              </p>
            </td>
            <td>{{ preparando.observacao}}</td>
            <td>
              R$ {{ calcularValorPedido(preparando) }}
              {{ preparando.formaPagamento }}
            </td>
            <td class="td-cliente">
              <p>{{ preparando.nomeCliente}}</p>
              <p>{{ preparando.telefoneCliente }}</p>
              <p>{{ preparando.enderecoCliente }}</p>
            </td>
            <td>
              <span class="td-flex-wrapper">
                <button @click="atualizarStatusPedido(preparando.id, 'expedido')">Confirmar</button>
              </span>
            </td>
          </tr>
        </table>
    </section>
    <section>
      <div class="section-status">Expedido<div class="section-divider"></div></div>
        <table>
          <tr>
            <th>Número</th>
            <th>Itens</th>
            <th>Observação</th>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Ação</th>
          </tr>
          <tr v-for="expedido in pedidos.expedidos" v-bind:key="expedido.id">
            <td>{{ expedido.id }}</td>
            <td class="td-ingredientes">
              <p v-for="itemPizza in expedido.pizzaItemPedidos" v-bind:key="itemPizza.id">
                {{ itemPizza.qtd }}× {{ itemPizza.pizza.nome }}
              </p>
              <p v-for="itemBebida in expedido.bebidaItemPedidos" v-bind:key="itemBebida.id">
                {{ itemBebida.qtd }}× {{ itemBebida.bebida.nome }}
              </p>
            </td>
            <td>{{ expedido.observacao}}</td>
            <td>
              R$ {{ calcularValorPedido(expedido) }}
              {{ expedido.formaPagamento }}
            </td>
            <td class="td-cliente">
              <p>{{ expedido.nomeCliente}}</p>
              <p>{{ expedido.telefoneCliente }}</p>
              <p>{{ expedido.enderecoCliente }}</p>
            </td>
            <td>
              <span class="td-flex-wrapper">
                <button @click="atualizarStatusPedido(expedido.id, 'entregue')">Confirmar</button>
              </span>
            </td>
          </tr>
        </table>
    </section>
  </div>
</template>

<script>
import PedidoService from '../services/PedidoService'

export default {
  name: 'ControlePedidos',

  data () {
    return {
      pedidos: {
        entradas: [],
        confirmados: [],
        emPreparo: [],
        expedidos: []
      }
    }
  },

  async mounted () {
    try {
      await this.buscarPedidos()
    } catch (err) {
      console.error(err)
    }
  },

  methods: {
    async buscarPedidos () {
      this.pedidos = await PedidoService.buscarTodosPorStatus()
      setTimeout(this.buscarPedidos, 10000)
    },

    async atualizarStatusPedido (pedidoId, status) {
      await PedidoService.atualizarStatusPedido(pedidoId, status)
      await this.buscarPedidos()
    },

    calcularValorPedido(pedido) {
      let valorPedido = 0
        pedido.pizzaItemPedidos.forEach(itemPizza => {
          valorPedido += parseInt(itemPizza.qtd) * itemPizza.pizza.preco
        })
        pedido.bebidaItemPedidos.forEach(itemBebida => {
          valorPedido += parseInt(itemBebida.qtd) * itemBebida.bebida.preco
        })
      return valorPedido
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1000px;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
    /* background-color: green; */
  }

  .section-status {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: black;
  }

  .list-items {
    list-style-type: none;
  }

  .list-items li {
    display: flex;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  table, tr, th, td {
    border: 1px solid black;
  }

  td { 
    height: 100%;
    min-height: 100%;
    padding: 1em;
  }

  .td-flex-wrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  button {
    margin: 0.5em;
  }
</style>