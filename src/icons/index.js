import Vue from "vue"
import SvgIcon from "components/SvgIcon" //svg component

//register globally
Vue.component('svg-icon',SvgIcon)

/**
 * require.context返回一个require 函数，此函数可以接收一个参数
 * 返回的函数：function webpackContext(req) {return __webpack_require__(webpackContextResolve(req))};
 * 函数有三个属性：resolve 、keys、id
 *  · resolve: 是一个函数，他返回的是被解析模块的id ，接受一个参数request。
 *  · keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成
 *  · id：上下文模块的id
 */
const req = require.context('./svg',false,/\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
// console.log(req.keys())//["./dashboard.svg", "./example.svg", "./eye-open.svg", "./eye.svg", "./form.svg", "./link.svg", "./nested.svg", "./password.svg", "./table.svg", ".////tree.svg", "./user.svg"]
requireAll(req)