import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
