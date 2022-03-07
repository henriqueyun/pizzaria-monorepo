<template>
  <section class="visualizacao-produto">
    <header>
      <h1>{{ obterPalavraComPrimeiraLetraMaiuscula(action)}} {{ obterPalavraComPrimeiraLetraMaiuscula(produto.tipo) }}</h1>
    </header>
    <main class="simple-container">
      <label for="nomeProduto">{{ ['pizza', 'esfiha'].includes(produto.tipo.toLowerCase()) ? 'Sabor:' : 'Nome:' }}</label><br/>
      <input type="text" name="nomeProduto" placeholder="Carregando informações..."/>
      <label for="precoProduto">Preço:</label><br/>
      <input type="text" name="precoProduto" placeholder="Carregando informações..."/>
      <label for="qtd">Quantidade:</label><br/>
      <input type="number" name="qtd" min="0" max="99" value="1"/><br/>
      <span @click="adicionarItem()">Adicionar ao carrinho</span>
    </main>
  </section>
</template>

<script>
import ProdutoService from '../services/ProdutoService'
export default {
  data () {
    return {
      produto: {
        nome: '',
        tipo: ''
      },
      itemPedido: {},
      action: this.$route.params.action,
      acaoEncontrada: true
    }
  },

  mounted() {
    this.carregarDados()
  },

  methods: {
    // cuida do load da interface a depender do tipo de produto e ação (adicionar, editar etc.)
    carregarDados () {
      const metodosCarregamento = {
        adicionar: async () => {
          this.produto = await ProdutoService.get(this.$route.params.id)          
        },
        editar: () => {
          let itensPedido = this.localStorage().getItem('itensPedido')
          itensPedido = JSON.parse('itensPedido')
          itensPedido[this.$route.params.id]
        }
      }
      if (this.$route.params.action in metodosCarregamento) {
        metodosCarregamento[this.$route.params.action]()
      } else {
        alert('Ação não encontrada, volte à página inicial e tente novamente.')
        window.location = '/'
      }
    },
    obterPalavraComPrimeiraLetraMaiuscula(palavra) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    }
  }
}
</script>

<style>
  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }  
  .visualizacao-produto {
    font-size: x-large;
  }

  .visualizacao-produto input {
    font-size: large;
    padding: 5px;
    width: 100%;
  }

  .visualizacao-produto span {
    padding: 5px;
    font-size: x-large;
    color: white;
    background-color: black;
    cursor: pointer;
    float: right;
  }

  .visualizacao-produto input[type="number"] {
    width: min-content;
  }

</style>