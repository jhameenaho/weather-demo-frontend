import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://weatherdemo-backend.herokuapp.com/api/v1/' : 'http://localhost:8080/api/v1/'