<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
        <div class="title-container">
            <h3 class="title">Login Form</h3>
        </div>
        <el-form-item prop="username">
            <el-input placeholder="Username" prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="Password" prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" type="primary" @click="submitForm('loginForm')">Login</el-button>
        </el-form-item>
    </el-form>
    <div>
        <span>username:admin</span>
        <span>password:anny</span>
    </div>
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
            }
        }
    },
    methods:{
        submitForm(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    alert('submit');
                }else{
                    alert("error submit");
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
    
    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
        .login-container .el-input input {
            color: $cursor;
        }
    }

    /*reset element-ui css*/
    .login-container{
        .el-input{
            display: inline-block;
            height: 47px;
            width: 85%;
        }

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
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
    $bg:#283443;
    $light_gray:#fff;
    $cursor:#fff;
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
    }
</style>