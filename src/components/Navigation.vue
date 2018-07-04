<template lang="html">
  <div>
    <button @click="prev" :disabled="prevDisabled" >Anterior</button>
    <button @click="next" :disabled="nextDisabled" >Siguiente</button>
  </div>
</template>

<script>
export default {
  props: {
    nextDisabled: { type: Boolean, default: false },
    prevDisabled: { type: Boolean, default: false }
  },
  methods: {
    next () {
      this.$emit('next')
    },
    prev () {
      this.$emit('prev')
    }
  }
}
</script>

<style lang="css">
</style>
