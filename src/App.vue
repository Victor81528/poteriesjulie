<template>
  <div id="app">
    <nav>
      <div class="nav-logo">
        <router-link to="/"><p>Julie</p></router-link>
      </div>
      <div class="nav-link">
        <router-link to="/about">所有商品</router-link>｜
        <router-link to="/about">設計主張</router-link>｜
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
        <p>Copyright © 2021 Julie.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/scss/_reset.css'

export default {
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
    position: fixed;
    width: 100%;
    flex-flow: nowrap row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 10;
    padding: 20px;
    .nav-logo{
      a {
      font-weight: bold;
      font-size: 30px;
      color: #ffffff;
      }
    }
    .nav-link {
      color: #ffffff;
      a {
        font-weight: bold;
        color: #ffffff;
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
