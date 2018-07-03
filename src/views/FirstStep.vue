<template lang="html">
  <div>
    <vue-cat-detail/>
    <vue-navigation/>
  </div>

</template>

<script>
import { CatDetail, Navigation } from '../components'

export default {
  components: {
    vueCatDetail: CatDetail,
    vueNavigation: Navigation
  }
}
</script>

<style lang="css">
</style>
