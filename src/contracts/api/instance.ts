import Axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:1337/api/',
  timeout: 30000,
})

export function getInstance(): AxiosInstance {
  return instance
}
