<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
             background-color="rgb(40, 45, 67)"
             text-color="white"
             active-text-color="#8387ff"
             router
    >
      <template v-for="item in items">
        <template>
          <el-menu-item  :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            {{item.title}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../assets/js/bus"
export default {
  name: 'TheAside',
  data(){
    return {
      collapse:false,
      items:[
        {
          icon:'el-icon-document',
          index:'Info',
          title:'系统首页'
        },
        {
          icon:'el-icon-document',
          index:'Consumer',
          title:'用户管理'
        },{
          icon:'el-icon-document',
          index:'Singer',
          title:'歌手管理'
        },{
          icon:'el-icon-document',
          index:'SongList',
          title:'歌单管理'
        },
      ]
    }
  },
  computed:{
    onRoutes(){
      return this.$route.path.replace('/','')
    }
  },
  created(){
    // 通过bus进行组件间通信 折叠侧边栏
    bus.$on('collapse',msg=>{
      this.collapse=msg
    })
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top:70px;
  bottom: 0;
  background-color: rgb(40, 45, 67);
  /*background-image:linear-gradient(to bottom right,rgb(114,135,254), rgb(94, 60, 137));*/
  overflow-y:scroll ;
}
.sidebar-el-menu:not(.el-menu--collapse){
  width: 150px;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar>ul {
  height: 100%;
}
</style>
