<template lang="html">
  <div>
    <h1>{{cat.name}}</h1>
    <img :src="cat.img" alt="cat" @click="clickedImage" width="50%"/>
  </div>

</template>

<script>
export default {
  props: {
    cat: { type: Object, default: () => ({name: '', message: '', img: 'http://www.mycattraining.com/wp-content/uploads/2017/12/how-to-train-a-cat-to-go-outside-teaching-your-cat-some-basic-manners.jpg'})}
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
