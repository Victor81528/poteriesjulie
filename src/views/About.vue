<template>
  <div id="about">
    <div class="design">
      <p>This is an about page</p>
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
    box-sizing: border-box;
    padding: 100px 30px ;
    background-color: white;
    .design {
      display: flex;
      width: 100%;
      height: 500px;
      background-color: yellow;
    }
  }
</style>
