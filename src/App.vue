<template>
  <div id="app">
    <vue-third-step/>
  </div>
</template>

<script>
import { FirstStep, SecondStep, ThirdStep } from './views'
export default {
  components: {
    vueFirstStep: FirstStep,
    vueSecondStep: SecondStep,
    vueThirdStep: ThirdStep
  }
}
</script>

<style lang="scss">

</style>
