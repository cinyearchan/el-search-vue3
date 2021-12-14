import { createStore } from 'vuex'
import { plugins } from './plugins'
import { codeEditor } from './modules/codeEditor'
import { connection } from './modules/connection'
import { indices } from './modules/indices'
import { language } from './modules/language'
import { nodes } from './modules/nodes'
import { queryRest } from './modules/queryRest'
import { search } from './modules/search'
import { snackbar } from './modules/snackbar'
import { theme } from './modules/theme'
import { repositories } from './modules/repositories'
import { snapshots } from './modules/snapshots'

export default createStore({
  plugins: plugins,
  modules: {
    codeEditor,
    connection,
    indices,
    language,
    nodes,
    queryRest,
    search,
    snackbar,
    theme,
    repositories,
    snapshots
  }
})
