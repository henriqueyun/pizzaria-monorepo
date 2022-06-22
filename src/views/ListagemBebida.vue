<template>
  <div class="container">
    <h1>Bebidas</h1>
    <div>
      <button class= "adicionar" @click="showAdicionar">Adicionar</button>
    </div>
    <br>
    <template v-if="bebidas.length">
      <div class="item-produto" v-for="iBebida in bebidas" v-bind:key="iBebida.id">
        <div class="dados-produto">
          <img :src="iBebida.imgURL" class="bebidaImg">
          <span class="label-destaque">{{ iBebida.nome}}&emsp;</span>
          <span class="label-destaque">{{ iBebida.volume}}ml&emsp;</span>
          <span class="label-destaque">{{ isAlcoolica(iBebida.alcoolica)}}</span>
        </div>
        <div class="box-botoes-item-produto">
          <span class="label-destaque">R$ {{ iBebida.preco }}</span>
          <button class="btn-action" @click="showAlterar(iBebida)">Alterar</button>
          <button @click="showConfirmar(iBebida)" class="btn-action red">Excluir</button>
        </div>
      </div>
    </template>
    <modal name="confirmar" :height="100" :width="600">
      <div style="width: 600px; text-align: center;">
        <h2>Tem certeza que deseja excluir?</h2>
        <button style="position: relative; right: 50%;" @click="removerBebida(id)" class="btn-modal green">Sim</button>
        <button style="position: relative; right: 15%;" @click="hideConfirmar()" class="btn-modal red">Não</button>
      </div>       
    </modal>
   
    <modal name="adicionar" :clickToClose="true" :height="'auto'" :minHeight="600" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Adicionar Bebida</h2>
          <span class='nome'>*Imagem da Bebida</span>
          <label for="arquivo">
            <img class="up-img" :src="bebida.imgURL" width="80px">
          </label>
          <input type="file" name="arquivo" id="arquivo" accept=".jpg, .png, .jpeg" @change="loadImageAsBase64">
          <span class='nome'>*Nome da Bebida</span>
          <input v-model="bebida.nome" class='text-box' name='nome produto'>
          <span class='nome'>Volume da Bebida (ml)</span>
          <input v-model="bebida.volume" class='text-box' name='volume produto' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;">
          <div class="nome" style="padding-left: 20px;">
            <input v-model="bebida.alcoolica" type="checkbox" id="alcool" name="alcool">
            <label for="alcool"> Bebida alcoólica</label>
          </div>
          <span  class='nome'>*Preço</span>
          <input v-model="bebida.preco" class='text-box' name='preco' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode)) || window.event.keyCode == 44) return true; else return false;">
          <button class="btn-modal green" @click="adicionarBebida()" >Salvar</button>
          <button class="btn-modal red" @click="hideAdicionar()">Cancelar</button>
          <p style="font-size:0.8em; padding-left: 20px; padding-top: 20px;">*Campos obrigatórios</p>
      </div>
    </modal>
  
    <modal name="alterar" :clickToClose="true" :height="'auto'" :minHeight="600" :adaptive="true" :scrollable="true" :focusTrap="true" >
      <div>
        <h2 style="margin: 15px">Alterar Bebida</h2>
        <span class='nome'>*Imagem da Bebida</span>
        <label for="arquivo">
          <img class="up-img" :src="bebidaAlterada.imgURL" width="80px">
        </label>
        <input type="file" name="arquivo" id="arquivo" accept=".jpg, .png, .jpeg" @change="loadImageAsBase64">
        <span class='nome'>*Nome da Bebida</span>
        <input v-model="bebidaAlterada.nome" class='text-box' name='nome produto'>
        <span class='nome'>Volume da Bebida (ml)</span>
        <input v-model="bebidaAlterada.volume" class='text-box' name='volume produto' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;">
        <div class="nome" style="padding-left: 20px;">
          <input v-model="bebidaAlterada.alcoolica" type="checkbox" id="alcool" name="alcool">
          <label for="alcool"> Bebida alcoólica</label>
        </div>
        <span  class='nome'>*Preço</span>
        <input v-model="bebidaAlterada.preco" class='text-box' name='preco' onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode)) || window.event.keyCode == 44) return true; else return false;">
        <button class="btn-modal green" @click="alterarBebida()">Alterar</button>
        <button class="btn-modal red" @click="hideAlterar()">Cancelar</button>
        <p style="font-size:0.8em; padding-left: 20px; padding-top: 20px;">*Campos obrigatórios</p>
      </div>
    </modal>
 
  </div>
</template>

<script>

import BebidaService from "../services/BebidaService"
export default {
  data() {
    return {
      bebida: {
        nome: "",
        preco: 0,
        imgURL: "/up-image.png",
        alcoolica: false,
        volume: 0
      },
      bebidaAlterada: {
        nome: "",
        preco: 0,
        imgURL: "/up-image.png",
        alcoolica: false,
        volume: 0
      },
      bebidas: []
    }
  },
  mounted() {
    this.buscarBebidas()
  },
  name: "App",
  methods: {

    showConfirmar(bebida){
      this.id = bebida.id
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

    showAlterar(bebida) {
      this.bebidaAlterada = bebida
      this.$modal.show("alterar");
    },

    hideAlterar() {
      this.$modal.hide("alterar");
    },

    limparModal() {
      this.bebida.nome = "",
      this.bebida.preco = 0,
      this.bebida.imgURL = "/up-image.png"
      this.bebida.alcoolica = false,
      this.bebida.volume = 0,
      this.bebidaAlterada.nome = "",
      this.bebidaAlterada.preco = 0,
      this.bebidaAlterada.imgURL = "/up-image.png"
      this.bebidaAlterada.alcoolica = false,
      this.bebidaAlterada.volume = 0
    },

    async adicionarBebida() {
      if (this.bebida.nome == "" || this.bebida.preco == 0 || this.bebida.imgURL == "/up-image.png"){
        alert("Preencha os campos obrigatórios")
      }
      else{
        if (isNaN(this.bebida.preco)){
          this.bebida.preco = parseFloat(this.bebida.preco.replace(",","."))
        }
        else{
          await BebidaService.adicionarBebida(this.bebida)
            .catch(err => console.error('error at adicionar bebida', err))
          this.limparModal()
          await this.buscarBebidas()
          this.hideAdicionar()
        }
      }
    },

    async alterarBebida() {
       if (this.bebidaAlterada.nome == "" || this.bebidaAlterada.preco == 0){
        alert("Preencha os campos obrigatórios")
      }
      else{
        if (isNaN(this.bebidaAlterada.preco)){
          this.bebidaAlterada.preco = parseFloat(this.bebidaAlterada.preco.replace(",","."))
        }
        else{
          await BebidaService.alterarBebida(this.bebidaAlterada)
            .catch(err => console.error('error at alterar bebida', err))
          this.limparModal()
          await this.buscarBebidas()
          this.hideAlterar()
        }
      }
    },

    async removerBebida(bebidaId) {
      await BebidaService.removerBebida(bebidaId)
      await this.buscarBebidas()
      this.hideConfirmar()
    },

    async xd () {
      console.log('xd')
    },

    async buscarBebidas() {
      this.bebidas = await BebidaService.buscarBebidas()
    },

    async loadImageAsBase64(e) {
      const file = e.target.files[0]
      const fileBase64 = await this.toBase64(file)
        .catch(err => console.error('error at loadimage as base 64', err))
      this.bebida.imgURL = fileBase64
      this.bebidaAlterada.imgURL = fileBase64
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

    isAlcoolica(alcoolica) {
      return alcoolica ? 'Alcoólica' : 'Não alcoólica'
    }
   
  }
}
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

.nome-alcool {
  margin-top: 15px;
  font-size: 1.2em;
  margin-left: 10px;
}

.text-box{
  display: block;
  padding-left: 20px;
  margin-left: 20px;
  border-radius: 8px;
  height: 30px
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

.bebidaImg {
  margin: 0.8em;
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
}
</style>