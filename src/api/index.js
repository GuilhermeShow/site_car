import axios from "axios";

const api = axios.create({
    baseURL: `https://api.mercadolibre.com/sites/MLB/search?q=carro+`
})

export {api};