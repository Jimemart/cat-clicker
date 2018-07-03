<template lang="html">
  <h1>{{counter}}</h1>
</template>

<script>
export default {
  props: {
    counter: { type: Number, required: true, default: 0}
  }
}
</script>

<style lang="css">
</style>
