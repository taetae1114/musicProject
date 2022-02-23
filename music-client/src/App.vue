<template>
  <div id="app">
    <router-view class="music-content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  }
}
</script>

<style>
#app {
  background-color: #e6ecf0;
  display: flex;
}

.music-content {
  flex: 1;
}
</style>
