<template>
  <nav :class="{'nav-open': navShow.isOpen}" :style="{color: navTextColor.color}" @touchmove.prevent>
    <div class="nav-logo-burger">
      <div class="nav-logo">
        <router-link to="/" @click.native="closeMenu"><p>Julie</p></router-link>
      </div>
      <a href="" class="nav-burger">
        <i class="fas fa-bars" @click.prevent="openMenu"></i>
        <i class="fas fa-times" @click.prevent="closeMenu"></i>
      </a>
    </div>
    <div class="nav-link">
      <router-link to="/about" @click.native="closeMenu">所有商品</router-link>
      <router-link to="/about" @click.native="closeMenu">設計主張</router-link>
      <router-link to="/about" @click.native="closeMenu">關於陶土</router-link>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Nav',
  data () {
    return {
      // isOpen: false
    }
  },
  methods: {
    openMenu () {
      this.$store.commit('changeNavShow', true)
    },
    closeMenu () {
      this.$store.commit('changeNavShow', false)
    }
  },
  computed: {
    ...mapState([
      'navTextColor',
      'navShow'
    ])
  }
}
</script>

<style lang="scss">
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
    user-select: none;
    color: #f5f5f7;
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
        }
      }
      .nav-burger {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
        }
        .fa-bars {
          font-size: 25px;
        }
        .fa-times {
          display: none;
          @media screen and (max-width: 768px) {
            font-size: 25px;
          }
        }
      }
    }
    .nav-link {
      display: flex;
      flex-flow: row nowrap;
      @media screen and (max-width: 768px) {
        display: none;
      }
      a {
        text-align: center;
        line-height: 35px;
        margin-left: 20px;
        font-weight: bold;
      }
    }
    &.nav-open {
      @media screen and (max-width: 768px) {
        display: flex;
        position: fixed;
        flex-flow: column nowrap;
        width: 100%;
        // height: 250px;
        height: 100%;
        justify-content: flex-start;
        background-color: rgba(0, 0, 0, 0.85);
        transition: ease-in-out 0.6s;
        color: #f5f5f7 !important;
        .nav-logo-burger {
          padding-bottom: 20px;
          border-bottom: solid 1px #f5f5f7;
          box-sizing: border-box;
          .nav-logo {
            :hover {
              color: #ffffff
            }
          }
          .nav-burger {
            :hover {
              color: #ffffff;
            }
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
            width: 100%;
            font-size: 18px;
            text-align: end;
            margin-bottom: 10px;
            :hover {
              color: #ffffff
            }
          }
        }
      }
      @media screen and (max-width: 512px) {
      }
    }
  }</style>
