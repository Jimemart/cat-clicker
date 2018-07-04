<template lang="html">
  <div>
    <vue-cat-list :list="listOfCats" @selected="selectCat($event)"/>
    <vue-cat-detail :cat="selectedCat" :counter="counter"/>
    <vue-navigation
    @prev="$router.push('second-step')"
    :nextDisabled="true"/>
  </div>

</template>

<script>
import { CatList, CatDetail, Navigation } from '../components'
import fiveCats from '../mocks/five-cats.json'

export default {
  components: {
    vueCatList: CatList,
    vueCatDetail: CatDetail,
    vueNavigation: Navigation
  },
  computed: {
    selectedCat: {
      get () { return this.$store.state.cats.selectedCat }
    },
    listOfCats: {
      get() { return this.$store.state.cats.listOfCats }
    },
    counter: {
      get () { return this.$store.state.cats.counter }
    }
  },
  methods: {
    selectCat (id) {
      this.$store.commit('cats/SELECT_CAT', id)
    }
  },
  watch: {
    selectedCat(newVal, oldVal) {
      if (newVal !== oldVal) this.$store.commit('cats/RESTORE_COUNTER')
    }
  },
  mounted () {
    this.$store.commit('cats/SET_LIST', fiveCats)
    this.$store.commit('cats/SELECT_CAT', 1)
  }
}
</script>

<style lang="css">
</style>
