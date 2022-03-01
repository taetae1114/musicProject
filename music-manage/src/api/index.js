import {get,post} from './http'

//判断管理员是否登陆成功？
export const getLoginStatus = (params)=>post(`admin/login/status`,params)
