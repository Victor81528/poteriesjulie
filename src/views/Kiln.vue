<template>
  <div id="kiln">
    <div class="design">
      <div class="box">
        <video id="bg-video" muted autoplay loop>
          <source src="../assets/01.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
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
    this.$store.commit('changeColor', '#f5f5f7')
  }
}
</script>

<style lang="scss">
  .box {
    // filter: blur(4px) sepia(30%);
    filter: saturate(50%);
  }
  #bg-video {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    object-fit: cover;
    // filter: blur(4px);
  }
  #kiln {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    .design {
      display: flex;
      width: 100%;
      height: 500px;
    }
  }
</style>
