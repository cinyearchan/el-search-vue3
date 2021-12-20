<template>
  <v-card>
    <v-card-title>
      <h1 class="text-h5">{{ $t('document.heading') }}</h1>
      <button :action="load">重载按钮</button>
      <button :route="{name: 'Search'}">回退按钮</button>
    </v-card-title>
    <v-divider/>

    <v-card-text>
      <div :request-state="requestState">
        <p>加载器</p>
        <div :caption="caption" :document="data" :initial-height="800">打印美化</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed, onMounted } from 'vue'
import { setupElasticsearchRequest } from '@/mixins/RequestComposition'

export default {
  name: 'document',
  components: {},
  setup (props, context) {
    const methodParams = computed(() => {
      const routeParams = context.root.$route.params
      return {
        index: routeParams.index,
        type: routeParams.type,
        id: routeParams.id
      }
    })

    const { load, requestState, data } = setupElasticsearchRequest('get', methodParams.value)
    onMounted(load)

    const caption = computed(() => {
      const routeParams = context.root.$route.params
      const docType = routeParams.type || '_doc'
      return `${routeParams.index}/${docType}/${routeParams.id}`
    })

    return {
      laod,
      requestState,
      data,
      caption
    }
  }
}
</script>
