  
import axios from 'axios'

const BASE_URI = 'localhost:9999'

export const client = (app = null) => {
  const baseURI = process.env.BASE_URI ? process.env.BASE_URI : BASE_URI
  const baseURL = app ? `http://${baseURI}/${app}` : `http://${baseURI}`

  return axios.create({
    baseURL,
  })
}
