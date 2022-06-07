import axios from 'axios'

const pizzaEndpoint = `${process.env.VUE_APP_API_URL}/pizza`

async function adicionarPizza(pizza) {
    const pizzaResponse = await axios.post(pizzaEndpoint, pizza)
    return pizzaResponse
}

async function buscarPizzas() {
    const pizzaResponse = await axios.get(`${pizzaEndpoint}/all`)
    return pizzaResponse.data
}

async function removerPizza(id){
    const pizzaResponse = await axios.delete(`${pizzaEndpoint}/${id}`)
    return pizzaResponse
}

async function alterarPizza(pizza) {
    const pizzaResponse = await axios.put(`${pizzaEndpoint}/${pizza.id}`, pizza)
    return pizzaResponse.data
}

export default {
    adicionarPizza,
    alterarPizza,
    removerPizza,
    buscarPizzas
}