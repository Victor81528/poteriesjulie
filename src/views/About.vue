<template>
  <div id="about">
    <div class="introduction">
      <img src="../assets/julie.jpg" alt="Julie">
      <div class="paragraph">
        <p>傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼</p>
        <p>傑尼傑尼傑尼傑尼傑尼傑尼</p>
        <p>傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼傑尼</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.commit('changeColor', '#2c3e50')
  }
}
</script>
<style lang="scss">
#about {
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  box-sizing: border-box;
  padding: 100px 30px 50px;
  background-color: white;
  @media screen and (max-width: 578px) {
    padding: 60px 15px 50px;
  }
  .introduction {
    display: flex;
    width: 100%;
    height: 80vh;
    flex-flow: nowrap row;
    @media screen and (max-width: 768px) {
      flex-flow: nowrap column;
      height: auto;
    }
    img {
      width: 50%;
      // min-width: 414px;
      object-fit: cover;
      object-position: -120px;
      margin-right: 30px;
      @media screen and (max-width: 992px) {
        width: 430px;
        object-position: -150px;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 611px;
        margin: 0;
      }
    }
    .paragraph {
    }
  }
}
</style>
