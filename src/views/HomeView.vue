<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="300">
    <HelloWorld msg="Welcome to JEI Entertainement!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
