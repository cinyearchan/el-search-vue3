import { DEFAULT_DATA_TABLE_OPTIONS } from '@/consts'

export const repositories = {
  namespaced: true,
  state: {
    filter: '',
    pagination: Object.assign({}, DEFAULT_DATA_TABLE_OPTIONS, { sortBy: ['name'] }),
    stickyTableHeader: false
  },
  matations: {
    setFilter (state, filter) {
      state.filter = filter
    },
    setPagination (state, pagination) {
      state.pagination = pagination
    },
    setStickyTableHeader (state, sticky) {
      state.stickyTableHeader = sticky
    }
  }
}
