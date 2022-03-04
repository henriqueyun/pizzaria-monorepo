<template>
  <section>
    <header>
      <h1>Cadastrar endereço</h1>
    </header>
    <main class="simple-container cadastrar-endereco">
      <label for="nome">Nome:</label><br/>
      <input type="nome" placeholder="ex.: José da Silva"/><br/><br/>

      <label for="telefone">Telefone:</label><br/>
      <input type="number" placeholder="ex.: (11) 91234-5678"><br/><br/>

      <label for="endereco">Endereço:</label><br/>
      <input name="endereco" type="text" placeholder="ex.: R. de exemplo, nº 123"/><br/><br/>

      <a href="/#"><span>Salvar</span></a>
    </main>
  </section>
</template>

<script>
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

  .cadastrar-endereco a {
    float: right;
    padding: 5px;
    font-size: x-large;
    color: white;
    text-decoration: none;
    background-color: black;
  }

  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }
</style>