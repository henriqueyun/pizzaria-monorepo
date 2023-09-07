import axios from 'axios'

const bebidaEndpoint = `${process.env.VUE_APP_API_URL}/bebida`

async function adicionarBebida(bebida) {
    const bebidaResponse = await axios.post(bebidaEndpoint, bebida)
    return bebidaResponse
}

async function buscarBebidas() {
    const bebidaResponse = await axios.get(`${bebidaEndpoint}/all`)
    return bebidaResponse.data
}

async function removerBebida(id){
    const bebidaResponse = await axios.delete(`${bebidaEndpoint}/${id}`)
    return bebidaResponse
}

async function alterarBebida(bebida) {
    const bebidaResponse = await axios.put(`${bebidaEndpoint}/${bebida.id}`, bebida)
    return bebidaResponse.data
}

export default {
    adicionarBebida,
    alterarBebida,
    removerBebida,
    buscarBebidas
}