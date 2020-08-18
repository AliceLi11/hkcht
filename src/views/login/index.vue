<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
        <div class="title-container">
            <h3 class="title">Login Form</h3>
        </div>
        <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input placeholder="Username" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password"></svg-icon>
            </span>
            <el-input placeholder="Password" v-model="loginForm.password" :type="passwordType" ref="password" @keyup.enter.native="handleLogin" :key="passwordType" ></el-input>
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType==='password'?'eye':'eye-open'"></svg-icon>
            </span>
        </el-form-item>
        <el-form-item>
            <el-button :loading="loading" style="width:100%;" type="primary" @click="submitForm('loginForm')">Login</el-button>
        </el-form-item>

        <div class="tips">
          <span style="margin-right:20px">username:admin</span>
          <span>password:anny</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import {validUsername} from 'utils/validate'
export default {
    name:"Login",
    data(){
        const validateUsername = (rule,value,callback)=>{
            if(!validUsername(value)){
                callback(new Error("Please enter the correct user name"))
            }else{
                callback();
            }
        };
        const validatePassword = (rule,value,callback)=>{
            console.log(value)
            if(value.length<6){
                return callback(new Error("The password can not be less than 6 digits"))
            }else{
                callback();
            }
        };
        return{
            loginForm:{
                username:"",
                password:""
            },
            loginRules:{
                username:[
                    {validator:validateUsername,trigger:'blur'}
                ],
                password:[
                    {validator:validatePassword,trigger:'blur'}
                ]
            },
            loading:false,
            passwordType:'password',
            redirect:undefined
        }
    },
    watch:{
      $route:{
        handler:function(route){
          this.redirect = route.query && route.query.redirect
          //自动跳转指定页面
        },
        immediate:true//立即执行handler函数
      }
    },
    methods:{
      showPwd(){
        if(this.passwordType==="password"){
          this.passwordType = ""
        }else{
          this.passwordType = "password"
        }
        this.$nextTick(()=>{
          this.$refs.password.focus()
        })
      },
      submitForm(form){
          this.$refs[form].validate((valid)=>{
              if(valid){
                this.loading = true;
                this.$store.dispatch('user/login',this.loginForm).then(()=>{
                  this.$router.push({path:this.redirect||'/'})
                  this.loading=false;
                }).catch(()=>{
                  this.loading=false;
                })
              }else{
                  console.log("error submit");
                  return false;
              }
          })
      }
    }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
    $bg:#283443;
    $light_gray:#fff;
    $cursor:#fff;
    
    // @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    //     .login-container .el-input input {
    //         color: $cursor;
    //     }
    // }

    /*reset element-ui css*/
    .login-container {
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;
          caret-color: $cursor;//光标颜色
//在Sass中可以使用&和伪元素、伪类配合使用，而且使用的方法非常简单。就是用&替代元素自身。
          // &:-webkit-autofill {
          //   box-shadow: 0 0 0px 1000px $bg inset !important;
          //   -webkit-text-fill-color: $cursor !important;
          // }好像没什么用了，chrome可能已经修复了？
        }
     }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;
    .login-container{
        width: 100%;
        min-height: 100%;
        background-color: $bg;
        overflow:hidden;
        .login-form{
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }

        .title-container{
            position: relative;
            .title{
                font-size: 26px;
                color: $light_gray;
                text-align: center;
                font-weight: bold;
                margin: 0 auto 40px auto;
            }
        }
        .tips{
          font-size:14px;
          color:#fff;
          margin-bottom: 10px;;
        }
        
        .svg-container{
          padding: 6px 5px 6px 15px;
          color: $dark_gray;
          vertical-align: middle;
          width: 30px;
          display: inline-block;
        }

        .show-pwd{
          position: absolute;
          right: 10px;
          top: 7px;
          font-size:16px;
          color: $dark_gray;
          cursor: pointer;
          user-select: none;//文本不能被选择
        }
    }
</style>