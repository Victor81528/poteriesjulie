<template>
  <div id="app">
    <nav :class="{'nav-open': isOpen}">
      <div class="nav-logo-burger">
        <div class="nav-logo">
          <router-link to="/"><p>Julie</p></router-link>
        </div>
        <a href="" class="nav-burger">
          <i class="fas fa-bars" @click.prevent="openMenu"></i>
          <i class="fas fa-times" @click.prevent="closeMenu"></i>
        </a>
      </div>
      <div class="nav-link">
        <router-link to="/about">所有商品</router-link>
        <router-link to="/about">設計主張</router-link>
        <router-link to="/about">關於陶土</router-link>
      </div>
    </nav>
    <router-view/>
    <footer>
      <div class="footer-info">
        <div class="fallow">
          <h1>關注我們</h1>
          <div class="footer-link">
            <a href="https://www.facebook.com/victor81528" target="blank"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/victor.hong/" target="blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2021 Alishan.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/scss/_reset.css'

export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    openMenu () {
      this.isOpen = true
    },
    closeMenu () {
      this.isOpen = false
    }
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
  nav {
    display: flex;
    position: absolute;
    width: 100%;
    height: 70px;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    z-index: 5;
    transition: ease-in-out 0.6s;
    .nav-logo-burger {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      @media screen and (max-width: 768px){
        width: 100%;
      }
      .nav-logo {
        a {
          font-weight: bold;
          font-size: 30px;
          color: #f5f5f7;
          :hover {
            color: #ffffff;
          }
        }
      }
      .nav-burger {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
        }
        .fa-bars {
          font-size: 25px;
          color: #f5f5f7;
          :hover {
            color: #ffffff;
          }
        }
        .fa-times {
          display: none;
          @media screen and (max-width: 768px) {
            color: #f5f5f7;
            font-size: 25px;
          }
        }
      }
    }
    .nav-link {
      display: flex;
      flex-flow: row nowrap;
      color: #f5f5f7;
      @media screen and (max-width: 768px) {
        display: none;
      }
      a {
        text-align: center;
        line-height: 35px;
        margin-left: 20px;
        font-weight: bold;
        color: #f5f5f7;
      }
    }
    &.nav-open {
      display: flex;
      flex-flow: column nowrap;
      height: 100vh;
      width: 100%;
      justify-content: flex-start;
      background-color: rgba(0, 0, 0, 0.85);
      .nav-logo-burger {
        padding-bottom: 20px;
        border-bottom: solid 1px #f5f5f7;
        box-sizing: border-box;
        .nav-logo {
        }
        .nav-burger {
          .fa-bars {
            display: none;
          }
          .fa-times {
            display: block;
          }
        }
      }
      .nav-link {
        display: flex;
        width: 100%;
        flex-flow: column nowrap;
        align-items: flex-end;
        box-sizing: border-box;
        padding: 20px 30px;
        a {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }
  footer {
    display: flex;
    width: 100%;
    height: 150px;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #e5e5e5;
    box-sizing: border-box;
    .footer-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      padding: 20px;
      .fallow {
        h1 {
          text-align: left;
          box-sizing: border-box;
          padding: 10px;
          border-bottom: black solid 1px;
        }
        .footer-link {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          box-sizing: border-box;
          padding: 10px;
          font-size: 25px;
          i {
            margin-right: 10px;
          }
        }
      }
    }
    .footer-copyright {
      text-align: center;
    }
  }
}

</style>
