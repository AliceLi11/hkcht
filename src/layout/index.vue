<template>
  <div>
    <sidebar/>
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


</style>