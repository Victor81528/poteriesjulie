<template>
  <div id="app">
    <Nav/>
    <router-view data-aos="fade" data-aos-duration="1000"/>
    <Footer/>
  </div>
</template>

<script>
import '@/scss/_reset.css'
import Nav from './views/Nav.vue'
import Footer from './views/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="scss">
  @font-face {
  font-family: NotoSansTC;
  src: url('/fonts/NotoSansTC-Thin.otf');
  }
  $my-white: #f5f5f7;
  #app {
    font-family: NotoSansTC;
  }
</style>
