<template lang="html">
  <div class="flex">
    <vue-cat-image @clicked="addUp" :cat=cat />
    <vue-cat-counter :counter=counter />
  </div>
</template>

<script>
import { Catimage, CatCounter } from './components'

export default {
  data() {
    return {
      counter: 0
    }
  },
  props: {
    cat: {type: Object}
  },
  components: {
    vueCatImage: Catimage,
    vueCatCounter: CatCounter
  },
  methods: {
    addUp () {
      this.counter ++
    }
  }
}
</script>

<style lang="css">
  .flex {
    display: flex;
    direction: row;
    justify-content: space-around;
  }
</style>
