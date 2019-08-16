import React from 'react'
import './commentItem.css'
//css可以直接引入样式外联css
//jsx内容作为组件
//构造函数，接收外部传入数据
const titleColor = {color: 'maroon'}

//react事件绑定只能在元素内行内绑定，事件名称首字母必须大写
//外部事件处理，事件对象：这个事件发生时，所有数据都放在事件对象里
//点击的元素名称事件位置等等
function aa (ev){
    console.log(ev.target,ev.target.getAttribute('data-set'))
}
export default function commentItem(props) {

    return (
        <div>
        <h1>评论列表</h1>
        { props.obj.map(item =>{
          return (<div key={item.id}>
          {/* react 语法中行内样式要两个胡子括号外层代表jsx语法，内层表示对象 */}
          <p><b style={ titleColor }>评论内容: </b>{ item.content }</p>
          <p><b className="commentP">评论人: </b>{ item.user }</p>
          <p><b>评论时间: </b>{ props.nowtime }</p>
          <button onClick={ aa } data-set={item.user}>alert</button>
          <button onClick={ function(){console.log(item.user)} }>111</button>
          <hr/>
          </div>
          )
        }) }
        </div>
    )
}