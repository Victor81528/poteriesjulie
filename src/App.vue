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
.v-leave { opacity: 1; }
.v-leave-active { transition: opacity 0.6s }
.v-leave-to { opacity: 0; }
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity 0.6s }
.v-enter-to { opacity: 1; }
  @font-face {
  font-family: NotoSansTC;
  src: url('/fonts/NotoSansTC-thin.otf');
  }
  #app {
    font-family: NotoSansTC;
  }
</style>
