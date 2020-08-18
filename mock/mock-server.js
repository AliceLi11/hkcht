//chokidar  是一个基于node.JS的监听文件夹改变模块。
const chokidar = require('chokidar')
//body-parser非常常用的一个express中间件，作用是对http请求体进行解析
const bodyParser = require('body-parser')
//chalk包的作用是修改控制台中字符串的样式
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')

//process.cwd()会返回Node.js进程的当前工作目录
const mockDir = path.join(process.cwd(),'mock')

function registerRoutes(app){
  let mockLastIndex
  const {mocks} = require('./index.js')
  

}

