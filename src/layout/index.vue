<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div>
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script>
import {Navbar,Sidebar,AppMain} from "layout/components"
export default {
  name:"Layout",
  components:{
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
  @import "styles/variables.scss";

  .app-wrapper{
    position: relative;
    width:100%;
    height: 100%;
  }
</style>