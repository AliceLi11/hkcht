module.exports = [
  //userLogin
  {
    // url 必须能匹配你的接口路由
    url:'/vue-admin-template/user/login',
    // 必须和你接口定义的类型一样
    type:"post",
    response:config=>{
      // 返回的结果
      // req and res detail see
      // https://expressjs.com/zh-cn/api.html#req
      const {username} = config.body
      const token = tokens[username]

      //mock error
      if(!token){
        return{
          code:60204,
          message:"Account and password are incorrect."
        }
      }

      return {
        code:2000,
        data:token
      }
    }
  }
]