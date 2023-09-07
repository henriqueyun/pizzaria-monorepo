<template>
  <section style="min-height: 75vh;">
    <header>
      <h1>Cadastrar endereço</h1>
      <p class="endereco-subtitulo">Informe o endereço para entregarmos à foguete! 🚀🏍️</p>
    </header>
    <main class="simple-container cadastrar-endereco">
      <label for="nome">Nome:</label><br/>
      <input v-model="cliente.nome" type="nome" placeholder="ex.: José da Silva"/><br/><br/>

      <label for="telefone">Telefone:</label><br/>
      <input v-model="cliente.telefone" v-mask="'(##) ?#####-####'" type="phone" placeholder="ex.: (11) 91234-5678"><br/><br/>

      <label for="endereco">Endereço:</label><br/>
      <input v-model="cliente.endereco" name="endereco" type="text" placeholder="ex.: R. de exemplo, nº 123"/><br/><br/>

      <span class="btn-salvar" @click="cadastrarDadosCliente">Salvar</span>
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
      const errosValidacao = this.validarDadosCliente()
      if (!errosValidacao) {
        localStorage.setItem('nomeCliente', this.cliente.nome)
        localStorage.setItem('telefoneCliente', this.cliente.telefone)
        localStorage.setItem('enderecoCliente', this.cliente.endereco)
        alert('Seus dados foram salvos!')
        this.$router.back()
      } else {
        alert('Ops, há problemas nos campos:\n' + errosValidacao)
      }
      
    },

    carregarDadosCliente () {
      this.cliente.nome = localStorage.getItem('nomeCliente')
      this.cliente.telefone = localStorage.getItem('telefoneCliente')
      this.cliente.endereco = localStorage.getItem('enderecoCliente')
    },

    validarDadosCliente () {
      let errosValidacao = ''
      if (!this.cliente.nome || this.cliente.nome.length <= 3) {
        errosValidacao += '\nNome'
      } 

      const TELEFONE_PATTERN = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/
      console.log(this.cliente.telefone)
      if (!TELEFONE_PATTERN.test(this.cliente.telefone)) {
        errosValidacao += '\nTelefone, o formato deve ser (XX) XXXX-XXXX'
      }

      if (!this.cliente.endereco && this.cliente.endereco.length > 4) {
        errosValidacao += '\nEndereço'
      }
      return errosValidacao
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
    margin-top: 1em;
    padding: 5px;
    width: 100%;
    font-size: large;
  }

  .cadastrar-endereco span {
    float: right;
    padding: 5px;
    font-size: x-large;
    color: white;
    background-color: black;
    cursor: pointer;
  }

  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }

  .endereco-subtitulo {
    text-align: center;
    color: lightgray;
    padding: 1em;
  }

  .btn-salvar {
    margin-bottom: 2em;
  }
</style>