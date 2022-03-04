<template>
  <section>
    <header>
      <h1>Adicionar Pizza</h1>
    </header>
    <main class="container">
    </main>
  </section>
</template>

<script>
export default {
  mounted() {
    // aqui vai a request que busca a pizza
    console.log(this.$route.params.id)
  },
}
</script>

<style>
  header h1 {
      font-size: xxx-large;
      margin-top: 50px;
      text-align: center;
  }
</style>