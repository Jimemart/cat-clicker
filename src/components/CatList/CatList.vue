<template lang="html">
  <ul>
    <vue-cat-list-element v-for="(elem, i) in list" :key="i" :cat="elem" @click="select(elem.id)"/>
  </ul>
</template>

<script>
import { CatListElement } from './components'
export default {
  props: {
    list: { type: Array, required: true }
  },
  components: {
    vueCatListElement: CatListElement
  },
  methods: {
    select (id) {
      this.$emit('selected', id)
    }
  }
}
</script>

<style lang="css">
</style>
