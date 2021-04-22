<template>
  <div class="home">
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><div class="slider1"></div></swiper-slide>
        <swiper-slide><div class="slider2"></div></swiper-slide>
        <swiper-slide><div class="slider3"></div></swiper-slide>
        <swiper-slide><div class="slider4"></div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div id="style">
      <h1 data-aos="fadeIn" data-aos-offset="100">設計風格</h1>
      <div class="style-content">
        <div class="style-content-zh" data-aos="fade-left">
          <p>皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡</p><br>
          <p>皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡，皮卡皮卡皮卡皮卡，皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡。</p><br>
        </div>
        <div class="style-content-en"  data-aos="fade-right">
          <p>Pika pika pika pika pika pika pika pika pika pika pika pika </p><br>
          <p>Pika pika pika pika pika pika pika pika pika pika pika pika, pika pika pika pika, pika pika pika pika pika pika pika pika pika pika pika pika pika.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        effect: 'fade',
        spaceBetween: 30,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(0, 2000, false)
    this.$store.commit('changeColor', '#f5f5f7')
  }
}
</script>

<style lang="scss">
.home {
  display: block;
  z-index: 10;
  #banner {
    .swiper-container,
    .swiper-container-fade,
    .swiper-container-initialized,
    .swiper-container-horizontal {
      width: 100%;
      height: 100vh;
      .swiper-wrapper {
        .swiper-slide,
        .swiper-slide-duplicate,
        .swiper-slide-prev {
          .slider1{
            width: 100%;
            height: 100%;
            background-image: url('../assets/01.jpg');
            background-size: cover;
            background-position: center;
          }
          .slider2{
            width: 100%;
            height: 100%;
            background-image: url('../assets/02.jpg');
            background-size: cover;
            background-position: center;
          }
          .slider3{
            width: 100%;
            height: 100%;
            background-image: url('../assets/03.jpg');
            background-size: cover;
            background-position: center;
          }
          .slider4{
            width: 100%;
            height: 100%;
            background-image: url('../assets/04.jpg');
            background-size: cover;
            background-position: center;
          }
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet {
          height: 12px;
          width: 12px;
          background-color: white;
        }
      }
    }
  }
  #style {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    background-color: white;
    box-sizing: border-box;
    padding: 40px;
    @media screen and (max-width: 414px) {
      padding: 20px;
    }
    h1 {
      width: 100%;
      margin-bottom: 50px;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      @media screen and (max-width: 414px) {
        margin-bottom: 30px;
      }
    }
    .style-content {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      .style-content-zh {
        margin-bottom: 50px;
        @media screen and (max-width: 414px) {
          margin-bottom: 25px;
        }
      }
      .style-content-en {
      }
    }
  }
}
</style>
