<template lang="html">
  <div>
    <vue-cat-detail  v-for="(cat, i) in twoCats" :key="i" :cat="cat" :local="true"/>
    <vue-navigation
    @next="$router.push('third-step')"
    @prev="$router.push('first-step')"/>
  </div>
</template>

<script>
import twoCats from '../mocks/two-cats.json'
import { CatDetail, Navigation } from '../components'
export default {
  data () {
    return {
      twoCats
    }
  },
  components: {
    vueCatDetail: CatDetail,
    vueNavigation: Navigation
  }
}
</script>

<style lang="css">
</style>
