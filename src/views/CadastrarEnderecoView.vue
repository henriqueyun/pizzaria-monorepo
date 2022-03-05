<template>
  <section>
    <header>
      <h1>Cadastrar endereço</h1>
    </header>
    <main class="simple-container cadastrar-endereco">
      <label for="nome">Nome:</label><br/>
      <input v-model="cliente.nome" type="nome" placeholder="ex.: José da Silva"/><br/><br/>

      <label for="telefone">Telefone:</label><br/>
      <input v-model="cliente.telefone" type="phone" placeholder="ex.: (11) 91234-5678"><br/><br/>

      <label for="endereco">Endereço:</label><br/>
      <input v-model="cliente.endereco" name="endereco" type="text" placeholder="ex.: R. de exemplo, nº 123"/><br/><br/>

      <span @click="cadastrarDadosCliente">Salvar</span>
    </main>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cliente: {
        nome: '',
        telefone: '',
        endereco: ''
      }
    }
  },
  methods : {
    cadastrarDadosCliente () {
      localStorage.setItem('nomeCliente', this.cliente.nome)
      localStorage.setItem('telefoneCliente', this.cliente.telefone)
      localStorage.setItem('enderecoCliente', this.cliente.endereco)
    },

    carregarDadosCliente () {
      this.cliente.nome = localStorage.getItem('nomeCliente')
      this.cliente.telefone = localStorage.getItem('telefoneCliente')
      this.cliente.endereco = localStorage.getItem('enderecoCliente')
    }
  },

  mounted () {
    this.carregarDadosCliente()
  }
}
</script>

<style scoped>
  .cadastrar-endereco {
    max-width: 400px;
    font-size: x-large;
  }

  .cadastrar-endereco input {
    padding: 5px;
    width: 100%;
    font-size: large;
  }

  .cadastrar-endereco span {
    float: right;
    padding: 5px;
    font-size: x-large;
    color: white;
    text-decoration: none;
    background-color: black;
    cursor: pointer;
  }

  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }
</style>