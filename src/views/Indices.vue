<template>
  <v-card>
    <v-card-title>
      <h2 class="text-h5">{{ $t('indices.heading') }}</h2>
      <button id="reload-indices">重载按钮</button>
    </v-card-title>
    <v-divider/>

    <div hide-progress>
      <div>indices-table</div>
    </div>
  </v-card>
</template>

<script>
import { setupElasticsearchRequest } from '@/mixins/RequestComposition'
import { onMounted } from 'vue'
import Loader from '@/components/shared/Loader'

export default {
  name: 'indices',
  components: {
    Loader
  },
  setup () {
    const CAT_INDICES_PARAMS = {
      h: 'index,health,status,uuid,pri,rep,docs,count,store.size',
      bytes: 'b'
    }
    const { load, requestState, data } = setupElasticsearchRequest('catIndices', CAT_INDICES_PARAMS)
    onMounted(load)

    return {
      load,
      requestState,
      data
    }
  }
}
</script>
