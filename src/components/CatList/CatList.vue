<template lang="html">
  <ul>
    <vue-cat-list-element v-for="(elem, i) in list" :key="i" :cat="elem" @click="show(elem.name)"/>
  </ul>
</template>

<script>
import { CatListElement } from './components'
import fiveCats from '../../mocks/five-cats.json'
export default {
  data () {
    return {
      list: fiveCats
    }
  },
  components: {
    vueCatListElement: CatListElement
  },
  methods: {
    show (name) {
      alert(name)
    }
  }
}
</script>

<style lang="css">
</style>
