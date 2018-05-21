import axios from 'axios'

let apiPath = '/api/v1/'
axios.defaults.baseURL = (process.env.NODE_ENV === 'production' ? 'https://weatherdemo-backend.herokuapp.com' : 'http://localhost:8080') + apiPath