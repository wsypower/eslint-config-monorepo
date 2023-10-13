/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-28 15:41:01
 * @LastEditTime: 2023-10-13 08:28:33
 * @LastEditors: wsy
 */

function defineRequest() { }

export default defineRequest(({ request }) => ({
  API_SAFECHECKLIST(params) {
    return request({
      url: 'check/task/pageList',
      method: 'get',
      params,
    })
  },
  API_CHECKTYPELIST(params) {
    return request({
      url: 'check/task/taskCheckTypeList',
      method: 'get',
      params,
    })
  },
}))
