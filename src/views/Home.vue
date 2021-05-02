<template>
  <div class="home">
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><div class="slider slider1"></div></swiper-slide>
        <swiper-slide><div class="slider slider2"></div></swiper-slide>
        <swiper-slide><div class="slider slider3"></div></swiper-slide>
        <swiper-slide><div class="slider slider4"></div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div id="style">
      <h1 data-aos="fadeIn" data-aos-offset="200">設計風格</h1>
      <div class="style-content">
        <div class="style-content-zh" data-aos="fade-left" data-aos-offset="80">
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
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
    this.$store.commit('changeColor', '#f5f5f7')
  }
}
</script>

<style lang="scss">
.home {
  display: block;
  z-index: 10;
  overflow: hidden; /* 用來防止aos的效果導致左右scroll bar產生 */
  #banner {
    .swiper-container,
    .swiper-container-fade,
    .swiper-container-initialized,
    .swiper-container-horizontal {
      width: 100vw;
      height: 100vh;
      .swiper-wrapper {
        .swiper-slide,
        .swiper-slide-duplicate,
        .swiper-slide-prev {
          .slider {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-size: cover;
            background-position: center;
          }
          .slider1{
            background-image: url('../assets/01.jpg');
          }
          .slider2{
            background-image: url('../assets/02.jpg');
          }
          .slider3{
            background-image: url('../assets/03.jpg');
          }
          .slider4{
            background-image: url('../assets/04.jpg');
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
      .swiper-button {
        color: white;
        @media screen and (max-width: 768px) {
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
