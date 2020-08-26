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

/*通过 chokidar 来观察 mock 文件夹内容的变化。在发生变化时会清除之前注册的mock-api接口，重新动态挂载新的接口，从而支持热更新。*/
function registerRoutes(app){
  let mockLastIndex
  const {mocks} = require('./index.js')
  const mocksForServer = mocks.map(route=>{
    return responseFake(route.url,route.type,route.response)
  })
  for (const mock of mocksForServer){
    app[mock.type](mock.url,mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength:mockRoutesLength,
    mockStartIndex:mockLastIndex-mockRoutesLength
  }
}

function unregisterRoutes(){
  Object.keys(require.cache).forEach(i=>{
    if(i.includes(mockDir)){
      delete require.cache[require.resolve(i)]
    }
  })
}

//for mock server
const responseFake = (url,type,respond)=>{
  return {
    url:new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type:type||'get',
    response(req,res){
      console.log('request invoke:'+req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req,res):respond))
    }
  }
}
