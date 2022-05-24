<template>
  <div class="container">
    <h1>Bebidas</h1>
    <div>
      <button class= "adicionar">Adicionar</button>
    </div>
    <br>
    <div class="item-produto">
      <div style="display: flex; align-items: center;">
        <img src="../assets/pizza1.png" width="80px">
        <span class="dado-produto">Coca cola</span>
        <span class="preco">Preço</span>
      </div>
      <button class="excluir">Excluir</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container {
    width: 1000px;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
    
    /* background-color: green; */
  }

  .item-produto {
    background-color: #EBE5E5;
    display: flex;
    align-items: center;
    font-size: 2em;
    justify-content: space-between;
    box-shadow: 5px 5px 20px grey;
    border-radius: 8px;
  }
  
  .dado-produto{
    margin: 0 1em;
  }

  .preco{
    margin: 0 1em;
    font-size: 0.8em;
  }

  .excluir{
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 15px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.6s
  }
  .excluir:hover{
  background: #CECECE;
  color: #000000;
}
.excluir:active{
  background: red;
  color: #000000;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  
}

.adicionar{
    background-color: #000000;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s
}

.adicionar:hover{
  background: #CECECE;
  color: #000000;
}

.adicionar:active{
  background: red;
  color: #000000;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>