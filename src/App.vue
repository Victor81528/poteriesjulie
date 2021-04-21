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
@fontface
<style lang="scss">
  @font-face {
  font-family: NotoSansTC;
  src: url('/fonts/NotoSansTC-thin.otf');
  }
  #app {
    font-family: NotoSansTC;
  }
</style>
