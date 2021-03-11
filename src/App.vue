<template>
  <div class="container">
      <Header />
      <router-view />
  </div>
  
</template>

<script lang="ts">

import Header from './components/Header.vue'
import PageAdmin from './views/PageAdmin.vue'
import PageClient from './views/PageClient.vue'

export default {
  name: 'Dashboard',
  components: { Header, PageAdmin, PageClient },
  watch: {
    $route: {
      immedite: true,
      handler(to,from) {
        document.title = to.meta.title || 'Брокерская компания'
      }
    }
  }
}

</script>