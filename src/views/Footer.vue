<template>
  <footer>
    <div class="footer-info">
      <div class="fallow">
        <h1>關注我們</h1>
        <div class="footer-link">
          <a href="" target="blank"><i class="fab fa-facebook-square"></i></a>
          <a href="" target="blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2021 Artimiste.</p>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  footer {
    display: flex;
    width: 100%;
    height: 150px;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-self: center;
    background-color: #e5e5e5;
    box-sizing: border-box;
    padding: 20px;
    @media screen and (max-width: 768px) {
      padding: 15px;
    }
    @media screen and (max-width: 414px) {
      padding: 10px;
    }
    .footer-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      box-sizing: border-box;
      .fallow {
        h1 {
          text-align: left;
          box-sizing: border-box;
          padding: 10px;
          border-bottom: black solid 1px;
          font-size: 18px;
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
    .copyright {
      text-align: center;
    }
  }
</style>
