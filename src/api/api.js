/* 接口统一管理 */
import { Get, POST } from './http'
// 接口 baseUrl 管理
let baseUrl = '';
let exclUrl = '';
if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://118.24.85.227:7776'
  baseUrl = 'https://www.weizhu.xin/';
  exclUrl = 'https://www.weizhu.xin/';
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
  exclUrl = '/api'
}
export default {
  exclUrl,
  baseUrl,
  /* 登录部分开始 */
  // 登录接口
  loginUser (params) {
    // return Get(`${baseUrl}/test`, params)
    return POST(`${baseUrl}api/wzapi/index_wz_api`, params)
  },

}
