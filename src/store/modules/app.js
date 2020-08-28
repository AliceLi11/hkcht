import Cookies from "js-cookie"

const state = {
  sidebar:{
    opened:Cookies.get('sidebarStatus')? !!+Cookies.get('sidebarStatus'):true,//有点疑问（侧边栏点击收缩或展开好像true或false都可以，刷新没用到？）
    withoutAnimation:false//是否有动画
  },
  device:'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR:state=>{
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false;//疑问（为什么一切换侧边栏收缩或展开，就要关闭动画)
    if(state.sidebar.opened){
      Cookies.set('sidebarStatus',1)
    }else{
      Cookies.set('sidebarStatus',0)
    }
  },
  CLOSE_SIDEBAR:(state,withoutAnimation)=>{
    Cookies.set('sidebarStatus',0)
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE:(state,device)=>{
    state.device = device
  }
}

const actions = {
  toggleSideBar({commit}){
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({commit},{withoutAnimation}){
    commit('CLOSE_SIDEBAR',withoutAnimation)
  },
  toggleDevice({commit},device){
    commit('TOGGLE_DEVICE',device)
  }
}

export default{
  namespaced:true,
  state,
  mutations,
  actions
}