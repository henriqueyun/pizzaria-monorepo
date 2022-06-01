<template>
  <div class="container">
    <h1>Pizzas</h1>
    <div>
      <button class= "adicionar" @click="show">Adicionar</button>
    </div>
    <br>
    <div class="item-produto">
      <div style="display: flex; align-items: center;">
        <img src="../assets/pizza1.png" width="80px">
        <span class="dado-produto">Calabresa</span>
        <span class="ingredientes-produto">Molho de tomate, Calabresa, Cebola, Orégano e Azeitonas</span>
        <span class="preco">Preço</span>
      </div>
      <button class="excluir" @click="show1">Alterar</button>
      <button class="excluir">Excluir</button>
    </div>


    <modal name="adicionar" :clickToClose="false" :height="auto" :minHeight="490" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Adicionar Pizza</h2>
        <span class='nome'>Imagem da Pizza</span>
        <label for="arquivo">
          <img class="up-img" src="../assets/up-image.png" width="80px">
        </label>
        <input type="file" name="arquivo" id="arquivo">
        <span class='nome'>Nome da Pizza</span>
        <input class='text-box' name='nome produto'>
        <span class='nome'>Ingredientes</span>
        <label for="ingredientes">
          <textarea class="text-area" rows="4"></textarea>
        </label>
        <input class='text-box' name='ingredientes' style="display: none;">
        <span class='nome'>Preço</span>
        <input class='text-box' name='preco'>
        <button class= "salvar">Salvar</button>
        <button class= "adicionar" @click="hide" style= "position:relative; left: 430px; top: 30px;">Cancelar</button>
      </div>
    </modal>


    <modal name="alterar" :clickToClose="false" :height="auto" :minHeight="490" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Editar Pizza</h2>
        <span class='nome'>Imagem da Pizza</span>
        <label for="arquivo">
          <img class="up-img" src="../assets/pizza1.png" width="80px">
        </label>
        <input type="file" name="arquivo" id="arquivo">
        <span class='nome'>Nome da Pizza</span>
        <input class='text-box' name='nome produto'>
        <span class='nome'>Ingredientes</span>
        <label for="ingredientes">
          <textarea class="text-area" rows="4"></textarea>
        </label>
        <input class='text-box' name='ingredientes' style="display: none;">
        <span class='nome'>Preço</span>
        <input class='text-box' name='preco'>
        <button class= "salvar">Salvar</button>
        <button class= "adicionar" @click="hide1" style= "position:relative; left: 430px; top: 30px;">Cancelar</button>
      </div>
    </modal>

    
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    show() {
      this.$modal.show("adicionar");
    },
    hide() {
      this.$modal.hide("adicionar");
    },
    show1() {
      this.$modal.show("alterar");
    },
    hide1() {
      this.$modal.hide("alterar");
    }
  }
};
</script>

<style>
  .container {
    width: 60%;
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

  .ingredientes-produto{
    margin: 0 1em;
    font-size: 0.5em;
    padding-right: 100px;
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
    transition-duration: 0.4s
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
    transition: 0.4s
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

.salvar{
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
    transition: 0.4s;
    position:relative; 
    left: 430px; 
    top: 30px;
}

.salvar:hover{
  background: #CECECE;
  color: #000000;
}

.salvar:active{
  background: green;
  color: #000000;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.nome {
  display: block;
  padding-left: 20px;
  margin-top: 15px;
  font-size: 1.2em;
}

.text-box{
  display: block;
  padding-left: 20px;
  margin-left: 20px;
  border-radius: 8px;
  height: 30px
}

.text-area{
  display: block;
  padding-left: 18px;
  margin-left: 20px;
  border-radius: 8px;
  resize: none;
}

input[type="file"] {
    display: none;
}

.up-img{
  background-repeat: no-repeat;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 12px;
}

.up-img:hover{
  filter:brightness(90%);
}
</style>