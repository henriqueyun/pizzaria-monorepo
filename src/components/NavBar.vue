<template>
    <nav class="nav-bar">
    <router-link to="/"><h1 class="nav-logotype">Projeto Pizzaria 🍕</h1></router-link>
    <ul class="nav-menu">
      <router-link to="/cadastrar_endereco"><li class="nav-menu-item">Cadastrar endereço</li></router-link>
      <router-link to="/cardapio"><li class="nav-menu-item">Cardápio</li></router-link>
      <router-link to="/realizar_pedido"><li class="nav-menu-item">Realizar pedido <cart-icon/></li></router-link>
      <router-link to="/carrinho"><li class="nav-menu-item"></li></router-link>
    </ul>
  </nav>
</template>

<script>
import CartIcon from 'vue-material-design-icons/Cart.vue'
export default {
  name: 'NavBar',
  components: {
    CartIcon
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em; 
  color: white;
  background-color: black;
}

.nav-logotype {
  font-size: xxx-large;
}

.nav-menu {
  display: flex;
  align-items: center;
  list-style-type: none;
}


.nav-bar a {
  text-decoration: none;
  color: white;
}

.nav-menu-item {
  font-size: x-large;
  margin: 0 1em;
}

@media (max-width: 600px) {
  .nav-bar {
    flex-direction: column;
  }

  .nav-logotype {
    text-align: center;
  }
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }

  .nav-menu-item {
    white-space: nowrap;
  }
}
</style>