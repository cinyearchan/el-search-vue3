import { capitalize } from './'
import { computed } from 'vue'
import store from '@/store'

export const vuexAccessors = function (namespace, states) {
  const methods = {}

  states.forEach(key => {
    methods[key] = computed(
      {
        get: () => {
          return store.state[namespace][key]
        },
        set: value => {
          const capitalizeKey = capitalize(key)
          store.commit(`${namespace}/set${capitalizeKey}`, value)
        }
      }
    )
  })

  return methods
}
