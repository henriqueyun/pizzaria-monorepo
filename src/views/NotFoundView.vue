<template>
  <div class="about">
    <h1>Foi mal, mas não encontrei essa página =/</h1><br/>
    <span @click="voltarPagina()">Voltar para página anterior</span>
  </div>
</template>
<script>
export default {
  methods: {
    voltarPagina () {
      history.back()
    }
  }  
}
</script>
<style scoped>
  .about {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 3vw;
  }

  span {
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 2vw;
    cursor: pointer;
  }
</style>
