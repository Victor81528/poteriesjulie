<template>
  <div id="kiln">
    <div class="design">
      <div class="box">
      </div>
    </div>
    <div class="description">
      <video-background src="01.mp4" style="height: 100vh; height: 100vh;">
        <!-- 01.mp4實際路徑是在/public -->
      </video-background>
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
#kiln {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  .design {
    display: flex;
    width: 100%;
  }
  .description {
    width: 100vw;
    height: 100vh;
    filter: saturate(50%);
  }
}
</style>
