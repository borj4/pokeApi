   import axios from 'axios'

import { getAll, getOne } from './pokemons'

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getAll: getAll(client),
  getOne: getOne(axios),
}