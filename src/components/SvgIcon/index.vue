<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import {isExternal} from "utils/validate"
export default {
  name:"SvgIcon",
  props:{
    iconClass:{
      type:String,
      required:true
    },
    className:{
      type:String,
      default:""
    }
  },
  computed:{
    isExternal(){
      return isExternal(this.iconClass)
    },
    iconName(){
      return `#icon-${this.iconClass}`
    },
    svgClass(){
      if(this.iconClass){
        return 'svg-icon' + this.className
      }else{
        return 'svg-icon'
      }
    },
    styleExternalIcon(){
      return{
        /* 使用 SVG 图形中的形状来做遮罩并设定它的位置：离上边缘50%，离左边缘50% */
        mask:`url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
  .svg-icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill:currentColor;
    overflow: hidden;
  }
  .svg-external-icon{
    background-color:currentColor;
    mask-size:cover !important;
    display: inline-block;
  }
</style>