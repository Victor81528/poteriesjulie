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
  padding: 100px 30px ;
  background-color: white;
  .introduction {
    display: flex;
    width: 100%;
    height: 80vh;
    flex-flow: nowrap row;
    img {
      width: 50%;
      object-fit: cover;
      object-position: -120px;
    }
  }
}
</style>
