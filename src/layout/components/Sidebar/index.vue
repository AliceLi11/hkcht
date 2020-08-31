<template>
  <div>
    <sidebar-logo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :basePath="route.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import SidebarLogo from "layout/components/Sidebar/SidebarLogo"
  import variables from "styles/variables.scss"
  import SidebarItem from "layout/components/Sidebar/SidebarItem"
  export default{
    components:{
      SidebarLogo,
      SidebarItem
    },
    computed:{
      ...mapGetters([
        'sidebar'
      ]),
      routes() {
        return this.$router.options.routes
      },
      activeMenu(){
        const route = this.$route
        const {meta,path} = route
        if(meta.activeMenu){
          return meta.activeMenu
        }else{
          return path
        }
      },
      variables(){
        return variables
      },
      isCollapse(){
        return !this.sidebar.opened
      }
    }
  }
</script>

<style>

</style>