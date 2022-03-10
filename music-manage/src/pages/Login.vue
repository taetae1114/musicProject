<template>
  <div class="login-wrap">
    <div class="ms-title">music 后台管理登录</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input class="ms-input" v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="ms-input" v-model="ruleForm.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getLoginStatus} from '../api'
import {mixin} from '../mixins'
export default {
  mixins:[mixin],
  data: function () {
    return {
      ruleForm:{
        username: 'admin',
        password: '123'
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(){
      let params = new URLSearchParams()
      params.append("name",this.ruleForm.username)
      params.append("password",this.ruleForm.password)
      getLoginStatus(params)
      .then(res=>{
        // console.log(res)
        if(res.code===1){
          localStorage.setItem('userName',this.ruleForm.username)
          this.$router.push('/Info')
          this.notify("登录成功","success")
        }else{
          this.notify("登录失败","error")
        }
      })
    }
  }
}
</script>

<style scoped>

.login-wrap {
  position: relative;
  background-image:linear-gradient(to bottom right,rgb(114,135,254),rgb(130,88,186));
  /*background: url("../assets/img/background.jpg");*/
  /*background-attachment: fixed;*/
  /*background-position: center;*/
  /*background-size: cover;*/
  width: 100%;
  height: 100%;

}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  transform: translate(-50%,-50%);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 50px 0 rgb(59,45,159);
  background-image: linear-gradient(to bottom right,rgb(118,76,163),rgb(92,103,211));
  /*border-radius: 5px;*/
  /*background-color: rgba(255,255,255,0.8);*/
}

.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  background-color: mediumslateblue;
}
</style>
