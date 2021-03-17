<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import '@/scss/_reset.css'
import Nav from './views/Nav.vue'
import Footer from './views/Footer.vue'test

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
  #app {
    width: 100vw;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
