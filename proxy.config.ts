import type { ProxyOptions } from 'vite'

const proxy: Record<string, string | ProxyOptions> = {
  '/api': {
    target: 'http://test.org/',
    secure: false,
    changeOrigin: true,
    ws: true // 允许websocket代理
  }
}
export default proxy
