<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <AppLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <MenuItem :icon="onlyOneChild.meta.icon || (item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title"/>
        </el-menu-item>
      </AppLink>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template slot="title">
        <MenuItem v-if="item.meta" :icon="item.meta&&item.meta.icon" :title="item.meta.title"></MenuItem>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import path from "path"
import { isExternal } from 'utils/validate'
import AppLink from "layout/components/Sidebar/AppLink"
import MenuItem from "layout/components/Sidebar/MenuItem"
export default {
  name:"SidebarItem",
  components:{
    AppLink,
    MenuItem
  },
  props:{
    item:{
      type:Object,
      required:true
    },
    basePath:{
      type:String,
      default:""
    },
    isNest:{
      type:Boolean,
      default:false
    }
  },
  data(){
    this.onlyOneChild = null;
    return {}
  },
  methods:{
    hasOneShowingChild(children = [], parent){
      const showingChildren = children.filter(item=>{
        if(item.hidden){
          return false
        }else{
          //Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      })
      
      //when there is only one child router,the child router is displayed by default
      if(showingChildren.length === 1){
        return true
      }

      //show parent if there are no child router to display
      if(showingChildren.length === 0){
        this.onlyOneChild = { ...parent,path:"",noShowingChildren:true}
        return true
      }

      return false
    },
    resolvePath(routePath){
      if(isExternal(routePath)){
        return routePath
      }
      if(isExternal(this.basePath)){
        return this.basePath
      }
      return path.resolve(this.basePath,routePath)
    }
  }
}
</script>

<style>

</style>