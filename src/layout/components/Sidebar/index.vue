<template>
  <div>
    <sidebar-logo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
      >
      <SidebarItem v-for="route in routes" :key="route.path"></SidebarItem>
      </el-menu>
    </el-scrollbar>
    <!-- <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        :active-text-color="variables.menuActiveText"
        :text-color="variables.menuText"
        :background-color="variables.menuBg"
        mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar> -->
  </div>
</template>

<script>
  import SidebarLogo from "layout/components/Sidebar/SidebarLogo"
// import variables from "styles/variables.scss"
import SidebarItem from "layout/components/Sidebar/SidebarItem"
  export default{
    components:{
      SidebarLogo,
      SidebarItem
    },
    routes() {
      return this.$router.options.routes
    },
  }
// export default {
//   components:{
//     SidebarItem
//   },
//   computed:{
//     variables(){
//       return variables
//     },
//     activeMenu(){
//       const route = this.$route;
//       const {meta,path} = route;
//       //if set path,the sidebar will highlight the path you set
//       if(meta.activeMenu){
//         return meta.activeMenu
//       }
//       return path;
//     },
//     routes(){
//       return this.$router.options.routes;
//     }
//   }
// }
</script>

<style>

</style>