<template lang="html">
  <div class="flex">
    <vue-cat-image @clicked="addUp" :cat=cat />
    <vue-cat-counter :counter=catCounter />
  </div>
</template>

<script>
import { Catimage, CatCounter } from './components'

export default {
  data () {
    return {
      dataCounter: this.counter
    }
  },
  computed: {
    catCounter: {
      get () { return this.local ? this.dataCounter : this.counter }
    }
  },
  props: {
    cat: {type: Object},
    counter: { type: Number, default: 0 },
    local: { type: Boolean, default: false }
  },
  components: {
    vueCatImage: Catimage,
    vueCatCounter: CatCounter
  },
  methods: {
    addUp () {
      this.local ? this.dataCounter ++ : this.$store.commit('cats/ADD_ONE')
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
