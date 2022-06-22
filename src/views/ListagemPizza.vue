<template>
  <div class="container">
    <h1>Pizzas</h1>
    <div>
      <button class= "adicionar" @click="showAdicionar">Adicionar</button>
    </div>
    <br>
    <template v-if="pizzas.length">
      <div class="item-produto" v-for="iPizza in pizzas" v-bind:key="iPizza.id">
        <div class="dados-produto">
          <img :src="iPizza.imgURL" class="pizzaImg">
          <span class="label-destaque">{{ iPizza.nome}}</span>
          <span class="ingredientes-produto"><strong>Ingredientes:</strong> {{ iPizza.ingredientes }}</span>
        </div>
        <div class="box-botoes-item-produto">
          <span class="label-destaque">R$ {{ iPizza.preco }}</span>
          <button class="btn-action" @click="showAlterar(iPizza)">Alterar</button>
          <button @click="showConfirmar(iPizza)" class="btn-action red">Excluir</button>
        </div>
      </div>
    </template>
    <modal name="confirmar" :height="100" :width="600">
      <div style="width: 100%; text-align: center;">
        <h2>Tem certeza que deseja excluir?</h2>
        <button @click="removerPizza(id)" class="btn-modal green">Sim</button>
        <button @click="hideConfirmar()" class="btn-modal red">Não</button>
      </div>       
    </modal>
   
    <modal name="adicionar" :clickToClose="true" :height="'auto'" :minHeight="600" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Adicionar Pizza</h2>
        <span class='nome'>Imagem da Pizza</span>
        <label for="arquivo">
          <img class="up-img" :src="pizza.imgURL" width="80px">
        </label>
        <input type="file" name="arquivo" id="arquivo" accept=".jpg, .png, .jpeg" @change="loadImageAsBase64">
        <span class='nome'>*Nome da Pizza</span>
        <input v-model="pizza.nome" class='text-box' name='nome produto'>
        <span class='nome'>Ingredientes</span>
        <label for="ingredientes">
          <textarea v-model="pizza.ingredientes" class="text-area" rows="4"></textarea>
        </label>
        <input class='text-box' name='ingredientes' style="display: none;">
        <span  class='nome'>*Preço</span>
        <input v-model="pizza.preco" class='text-box' name='preco' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode)) || window.event.keyCode == 44) return true; else return false;">
        <button class="btn-modal green" @click="adicionarPizza()" >Salvar</button>
        <button class="btn-modal red" @click="hideAdicionar()">Cancelar</button>
        <p style="font-size:0.8em; padding-left: 20px; padding-top: 20px;">*Campos obrigatórios</p>
      </div>
    </modal>
  
    <modal name="alterar" :clickToClose="true" :height="'auto'" :minHeight="600" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Alterar Pizza</h2>
        <span class='nome'>Imagem da Pizza</span>
        <label for="arquivo">
          <img class="up-img" :src="pizzaAlterada.imgURL" width="80px">
        </label>
        <input type="file" name="arquivo" id="arquivo" accept=".jpg, .png, .jpeg" @change="loadImageAsBase64">
        <span class='nome'>*Nome da Pizza</span>
        <input v-model="pizzaAlterada.nome" class='text-box' name='nome produto'>
        <span class='nome'>Ingredientes</span>
        <label for="ingredientes">
          <textarea v-model="pizzaAlterada.ingredientes" class="text-area" rows="4"></textarea>
        </label>
        <input class='text-box' name='ingredientes' style="display: none;">
        <span  class='nome'>*Preço</span>
        <input v-model="pizzaAlterada.preco" class='text-box' name='preco' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode)) || window.event.keyCode == 44) return true; else return false;">
        <button class="btn-modal green" @click="alterarPizza()">Alterar</button>
        <button class="btn-modal red" @click="hideAlterar()">Cancelar</button>
        <p style="font-size:0.8em; padding-left: 20px; padding-top: 20px;">*Campos obrigatórios</p>
      </div>
    </modal>
 
  </div>
</template>

<script>
import PizzaService from "../services/PizzaService"
export default {
  data() {
    return {
      pizza: {
        nome: "",
        ingredientes: "",
        preco: 0,
        imgURL: "/up-image.png"
      },
      pizzaAlterada: {
        nome: "",
        ingredientes: "",
        preco: 0,
        imgURL: "/up-image.png"
      },
      pizzas: []
    }
  },
  mounted() {
    this.buscarPizzas()
  },
  name: "App",
  methods: {
    showConfirmar(pizza){
      this.id = pizza.id
      this.$modal.show("confirmar");
    },
    hideConfirmar(){
      this.$modal.hide("confirmar");
    },
    showAdicionar() {
      this.$modal.show("adicionar");
    },
    hideAdicionar() {
      this.$modal.hide("adicionar");
    },
    showAlterar(pizza) {
      this.pizzaAlterada = pizza
      this.$modal.show("alterar");
    },
    hideAlterar() {
      this.$modal.hide("alterar");
    },
    limparModal() {
      this.pizza.nome = "",
      this.pizza.ingredientes = "",
      this.pizza.preco = 0,
      this.pizza.imgURL = "/up-image.png"
      this.pizzaAlterada.nome = "",
      this.pizzaAlterada.ingredientes = "",
      this.pizzaAlterada.preco = 0,
      this.pizzaAlterada.imgURL = "/up-image.png"
    },
    async adicionarPizza() {
      if (this.pizza.nome == "" || this.pizza.preco == 0){
        alert("Preencha os campos obrigatórios")
      }
      else{
        this.pizza.preco = parseFloat(this.pizza.preco.replace(",","."))
        await PizzaService.adicionarPizza(this.pizza)
          .catch(err => console.error('error at adicionar pizza', err))
        this.limparModal()
        await this.buscarPizzas()
        this.hideAdicionar()
      }
    },

    async alterarPizza() {
      if (this.pizzaAlterada.nome == "" || this.pizzaAlterada.preco == 0){
        alert("Preencha os campos obrigatórios")
      }
      else{
        this.pizzaAlterada.preco = parseFloat(this.pizzaAlterada.preco.replace(",","."))
        await PizzaService.alterarPizza(this.pizzaAlterada)
          .catch(err => console.error('error at alterar pizza', err))
        this.limparModal()
        await this.buscarPizzas()
        this.hideAlterar()
      }
    },
    async removerPizza(pizzaId) {
      await PizzaService.removerPizza(pizzaId)
      await this.buscarPizzas()
      this.hideConfirmar()
    },
    async xd () {
      console.log('xd')
    },
    async buscarPizzas() {
      this.pizzas = await PizzaService.buscarPizzas()
    },
    async loadImageAsBase64(e) {
      const file = e.target.files[0]
      const fileBase64 = await this.toBase64(file)
        .catch(err => console.error('error at loadimage as base 64', err))
      this.pizza.imgURL = fileBase64
      this.pizzaAlterada.imgURL = fileBase64
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.readAsDataURL(file);
        reader.onerror = error => reject(error);
      });
    },
  }
};
</script>

<style scoped>
  .container {
    width: 60%;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
  }

  .item-produto {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    justify-content: space-between;
    padding: 0.5em;
    background-color: white;
    box-shadow: 5px 5px 20px grey;
    border-radius: 8px;
  }

  .dados-produto {
    display: flex;
    align-items: center;
    max-width: 60%;
  }
  .label-destaque {
    font-size: 1.5em;
  }
  
  .box-botoes-item-produto {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.4em;
    padding: 0.4em;
  }

  .ingredientes-produto{
    font-size: 1em;
    margin: 0 1em;
  }

  .btn-action{
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s
  }
  .btn-action:hover{
    background: #CECECE;
    color: #000000;
  }
  .btn-action:active{
    background: red;
    color: #000000;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    
  }

  .btn-modal{
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition-duration: 0.4s;
    margin: 0.5em;
    float: right;
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

.red:hover{
  background: red;
  color: #000000;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.green:hover{
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

.pizzaImg {
  margin: 0.8em;
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
}
</style>