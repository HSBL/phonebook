import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://kontakkku.herokuapp.com/api'
})

export default instance
