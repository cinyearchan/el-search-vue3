import { HTTP_METHODS } from '@/consts'

const DEFAULT_REQUEST = {
  path: '',
  method: HTTP_METHODS[0],
  body: ''
}

export const queryRest = {
  namespaced: true,
  state: {
    request: Object.assign({}, DEFAULT_REQUEST),
    vertival: false
  },
  mutations: {
    setRequest (state, request) {
      state.request = request
    },
    setVertival (state, vertival) {
      state.vertival = vertival
    },
    resetRequest (state) {
      state.request = Object.assign({}, DEFAULT_REQUEST)
    }
  }
}
