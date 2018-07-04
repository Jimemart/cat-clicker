<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { FirstStep, SecondStep, ThirdStep } from './views'
export default {
  components: {
    vueFirstStep: FirstStep,
    vueSecondStep: SecondStep,
    vueThirdStep: ThirdStep
  },
  beforeUpdate () {
    this.$store.commit('cats/RESTORE_COUNTER')
    
  }
}
</script>

<style lang="scss">

</style>
