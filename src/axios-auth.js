import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://doit-v1.herokuapp.com/auth'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
