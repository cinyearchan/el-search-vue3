<template>
  <v-app :dark="dark">
    <p>header</p>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
      <p>snackbar</p>
    </v-main>

    <p>footer</p>
  </v-app>
</template>

<script>
import store from '@/store'
import { computed } from 'vue'
import { vuexAccessors } from '@/helpers/store'

export default {
  name: 'App',

  setup () {
    const isConnected = computed(() => {
      return store.state.connection.instances.length > 0
    })

    const { dark } = vuexAccessors('theme', ['dark'])

    return {
      dark,
      isConnected
    }
  }
}
</script>
