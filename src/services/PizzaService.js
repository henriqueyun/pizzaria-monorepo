import axios from 'axios'

const pizzaEndpoint = `${process.env.VUE_APP_API_URL}/pizza`

async function adicionarPizza(pizza){
    const pizzaResponse = await axios.post(pizzaEndpoint, pizza)
    return pizzaResponse
}

async function buscarPizzas() {
    const pizzaResponse = await axios.get(`${pizzaEndpoint}/all`)
    return pizzaResponse.data
}

export default {
    adicionarPizza,
    buscarPizzas
}