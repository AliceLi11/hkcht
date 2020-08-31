<template>
  <div class="navbar">Navbar
    <Hamburger class="hamburger-container" @toggleClick="toggleSideBar" :is-active="sidebar.opened"></Hamburger>
    <span>{{sidebar.opened}}</span>
    <Breadcrumb class="breadcrumb-container"></Breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from "components/Breadcrumb"
import Hamburger from "components/Hamburger"
import {mapGetters} from "vuex"
export default {
  name:"Navbar",
  components:{
    Breadcrumb,
    Hamburger
  },
  computed:{
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods:{
    toggleSideBar(){
      this.$store.dispatch("app/toggleSideBar")
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    height: 50px;
    position: relative;
    background:#fff;
    overflow: hidden;
    box-shadow:0 1px 4px rgba(0,21,41,.08);

    .hamburger-container{
      float:left;
      cursor:pointer;
      line-height: 46px;
      height: 100%;
      transition:background .3s;

      &:hover{
        background:rgba(0,0,0, .05)
      }
    }

    .breadcrumb-container{
      float:left;
    }    
  }

</style>