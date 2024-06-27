import axios from 'axios-miniprogram'
import QueryString from 'qs'

export const http = axios.create({
  baseURL: process.env.TARO_APP_BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: 'brackets' })
})

http.interceptors.request.use((config) => {
  console.log('axios config', config)

  return config
})
