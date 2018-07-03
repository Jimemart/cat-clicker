<template lang="html">
  <li @click="clicked">{{cat.name}}</li>
</template>

<script>
export default {
  props: {
    cat: { type: Object, required: true}
  },
  methods: {
    clicked () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="css">
</style>
