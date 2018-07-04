<template lang="html">
  <div>
    <vue-cat-detail :counter="counter"/>
    <vue-navigation
    @next="$router.push('second-step')"
    :prevDisabled="true"/>
  </div>

</template>

<script>
import { CatDetail, Navigation } from '../components'

export default {
  components: {
    vueCatDetail: CatDetail,
    vueNavigation: Navigation
  },
  computed: {
    counter: {
      get () { return this.$store.state.cats.counter }
    }
  }
}
</script>

<style lang="css">
</style>
