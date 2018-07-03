<template lang="html">
  <div>
    <h1>{{cat.name}}</h1>
    <img src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" alt="cat" @click="clickedImage" width="50%"/>
  </div>

</template>

<script>
export default {
  props: {
    cat: { type: Object, default: () => ({name: '', message: ''})}
  },
  methods: {
    clickedImage () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="css">
</style>
