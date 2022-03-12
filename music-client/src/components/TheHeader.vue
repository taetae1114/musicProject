<template>
  <div class="the-header">
    <div class="header-logo" @click="goHome">
        <svg class="icon">
            <use xlink:href = "#icon-erji"></use>
        </svg>
        <span>music</span>
    </div>
    <ul class="navbar">
        <li :class="{active: item.name == activeName}" v-for="item in navMsg" :key="item.path" @click="goPage(item.path,item.name)">
            {{item.name}}
        </li>
        <li>
            <div class="header-search">
                <input type="text" placeholder="搜索音乐" @keyup.enter="goSearch()" v-model="keywords">
                <div class="search-btn" @click="goSearch()">
                    <svg class="icon">
                        <use xlink:href = "#icon-sousuo"></use>
                    </svg>
                </div>
            </div>
        </li>
        <li v-show="!loginIn" :class="{active: item.name == activeName}" v-for="item in loginMsg" :key="item.path" @click="goPage(item.path,item.name)">
            {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {navMsg,loginMsg} from '../assets/data/header';

export default {
  name: 'the-header',
  data() {
      return {
          navMsg: [],    //左侧导航栏
          keywords: '',  //搜索关键字
          loginMsg: [],  //右侧导航栏
      }
  },
  computed:{
      ...mapGetters([
          'activeName',
          'loginIn'
      ])
  },
  created() {
      this.navMsg = navMsg;
      this.loginMsg = loginMsg;
  },

  methods: {
      goHome() {
          this.$router.push({path: "/"});
      },
      goPage(path,name) {
          this.$store.commit('setActiveName',name);
          this.$router.push({path: path});
      },
      goSearch(){
          this.$router.push({path:'/search',query:{keywords: this.keywords}})
      }
  }

}
</script>

<style  scoped>
@import '../assets/css/the-header.css';
</style>
