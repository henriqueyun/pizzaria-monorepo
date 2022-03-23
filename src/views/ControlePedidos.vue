<template>
  <div class="container">
    <h1>Controle de Pedidos</h1>
    <br/>
    <section>
      <div class="section-status">Entrada<div class="section-divider"></div></div>
      <!-- <ul class="list-items"> -->
        <!-- <li>
          <p>Pedido nº 202203230001</p>
          <p>
            1× Pizza Calamuça
            3× Pizza Brócoles
          </p>
          <p>
            Rapadura é doce mas não é mole não
          </p>
          <p>
            R$ 400,00
          </p>
          <p>
            Henrique Lima
            11 93214-7539
            Rua Altos do Oiti, 75
          </p>
        </li> -->
        <table>
          <tr>
            <th>Número</th>
            <th>Itens</th>
            <th>Observação</th>
            <th>Valor</th>
            <th>Cliente</th>
            <th>Ação</th>
          </tr>
          <tr>
            <td>202203230001</td>
            <td class="td-ingredientes">
              <p>1× Pizza Calamuça</p>
              <p>3× Pizza Brócoles</p>
            </td>
            <td>Rapadura é doce mas não é mole não</td>
            <td>R$ 400,00</td>
            <td class="td-cliente">
              <p>Henrique Lima</p>
              <p>11 93214-7539</p>
              <p>Rua Altos do Oiti, 75</p>
            </td>
            <td>
              <span class="td-flex-wrapper">
                <button>Confirmar</button>
                <button>Recusar</button>
              </span>
            </td>
          </tr>
        </table>
      <!-- </ul> -->
    </section>
    <section>
      <div class="section-status">Confirmado<div class="section-divider"></div></div>
      <ul class="list-items">
      </ul>
    </section>
    <section>
      <div class="section-status">Preparando<div class="section-divider"></div></div>
      <ul class="list-items">
      </ul>
    </section>
    <section>
      <div class="section-status">Expedido<div class="section-divider"></div></div>
      <ul class="list-items">
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ControlePedidos'
}
</script>

<style scoped>
  .container {
    width: 1000px;
    margin: 1em auto;
    display: flex;
    flex-flow: column wrap;
    /* background-color: green; */
  }

  .section-status {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: black;
  }

  .list-items {
    list-style-type: none;
  }

  .list-items li {
    display: flex;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  table, tr, th, td {
    border: 1px solid black;
  }

  td { 
    height: 100%;
    min-height: 100%;
    padding: 1em;
  }

  .td-flex-wrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  button {
    margin: 0.5em;
  }
</style>