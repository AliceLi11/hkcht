<script>
  export default{
    name:'MenuItem',
    functional:true,
    props:{
      icon:{
        type:String,
        default:''
      },
      title:{
        type:String,
        default:''
      }
    },
    render(h,context){
      const {icon,title} = context.props
      const vnodes = []
      
      if(icon){
        if(icon.includes('el-icon')){
          vnode.push(<i class={[icon,'sub-el-icon']}/>)
        }else{
          vnode.push(<svg-icon icon-class={icon}/>)
        }
      }

      if(title){
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
      return vnodes
    }
  }
</script>