import axios from 'axios'

async function adicionarPizza(pizza){
    console.log('add pizza', pizza)
    const pizzaResponse = await axios.post(`${process.env.VUE_APP_API_URL}/pizza`, pizza)
    return pizzaResponse
}

export default {
    adicionarPizza
}