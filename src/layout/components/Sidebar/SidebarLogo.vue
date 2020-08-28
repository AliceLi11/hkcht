<template>
  <div class="sidebar-logo-container">
    <router-link to="/" class="sidebar-logo-link">
      <img :src="logo" alt="" class="sidebar-logo">
      <h1 class="sidebar-title">{{title}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name:"SidebarLogo",
  data(){
    return{
      title:"Vue Admin Template",
      logo:'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-logo-container{
    position: relative;
    width:100%;
    height: 50px;
    line-height: 50px;
    background:#2b2f3a;
    text-align:center;
    overflow: hidden;

      & .sidebar-logo-link{
        width: 100%;
        height: 100%;
      }

        & .sidebar-logo{
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 12px;
        }

        & .sidebar-title{
          display:inline-block;
          color:#fff;
          line-height: 50px;
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          font-family:Avenir,Helvetica Nenu,Arial,Helvetica,sans-serif;
          vertical-align: middle;
        }
  }
</style>