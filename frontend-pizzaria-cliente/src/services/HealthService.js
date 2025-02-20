import axios from 'axios'

const healthEndpoint = `${process.env.VUE_APP_API_URL}/api/v1/health`

async function checarHealth() {
    const healthResponse = await axios.get(healthEndpoint)
    return healthResponse
}

export default {
    checarHealth,
}