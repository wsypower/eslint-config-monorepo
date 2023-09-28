function defineRequest() {}

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
