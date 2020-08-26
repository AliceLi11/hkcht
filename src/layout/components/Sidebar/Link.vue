<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script>
// 不明白为什么v-bind="一个方法"
//判断路径是否是https?:|mailto:|tel: 开头的
import {isExternal} from "@/utils/validate"
export default {
  props:{
    to:{
      type:String,
      required:true
    }
  },
  computed:{
    isExternal(){
      return isExternal(this.to)
    },
    type(){
      if(this.isExternal){
        return 'a'
      }
      return 'router-link'
    }
  },
  methods:{
    linkProps(to){
      if(this.isExternal){
        return {
          href:to,
          target:'_blank',
          rel:'noopener'
        }
      }
      return{
        to:to
      }
    }
  }
}
</script>

<style>

</style>