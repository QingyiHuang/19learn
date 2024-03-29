`npm install create-react-app -g`

`create-react-app appname`创建react app

##### JSX

```react
//react 提供的JSX语法
//1、标签最好使用成对标签 一个根节点
//2、单标签必须有闭合  <input />
//3、jsx以react.createElement()去创建节点，然后在render到目标节点上
//4、使用{}展示变量内容
//5、在属性中使用变量的时候直接{}
//6、react中的数组循环为了方便，使用ES6中的map方法 调用一个数组
//7、{}里面不能直接写 if、for循环等语句
import React from 'react'
import ReactDom from 'react-dom'
var mydiv = <h1>jsx语法</h1> //XML语法
    
let obj = {name: 'haha'}
let arr = ['11','33','kyo','henha']
{/*jsx循环需要一个key值*/}
var arrdiv = arr.map( (val, key) => {
 <h5 key = {key}>{ val }</h5>   
})
var mydiv2 = <div>
    	<h1>hello{obj.name}</h1>
        <h2>{str? 1 : 0}</h2>
        <h3 id={arr[0]}>这里id是变量</h3>
        {/*这是jsx语法注释*/}
        {/*jsx语法的内容可以相互嵌套添加使用*/}
        {/*数组jsx的调用*/}
        {arrdiv}
    </div>

ReactDom.render(mydiv,document.getElementById('app'))
```

##### 构造函数与组件

```react
//react中组件有两种定义方式，一种是构造函数方式，一种是类声明方法

import React from 'react'
import ReactDom from 'react-dom'

//构造函数声明组件：
//1、react中构造函数声明组件，构造函数的首字母必须大写，
//2、构造函数名不需要被new，直接当标签使用
//3、构造函数中直接将jsx语法内容直接返回即可 return
//4、为使观看方便，将return 里面的内容用括号包裹
//5、组件组件之间可以相互嵌套
function Component () {
    return (
    <div>
    	<section></section>
    </div>
    )
}
function Cp2 (){
    return (
    	<div>
         <Component/>
        </div>
    )
}
ReactDom.render(<Cp2/>,doucument.getElementById('app'))


//构造函数的props传值
import React from 'react'
import ReactDom from 'react-dom'

const data = {name: 'hh'}
function component (props) {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
        </div>
    )
}
{/* react 会将属性包装成一个对象 传到目标组件中 */}
{/* 构造函数声明组件间的props传值 */}
{/* props传递数组对象等数据都可以，类似vue */}
ReactDom.render(<component name={data.name}/>,document.getElementById('app'))


//组件想使用jsx语法必须导入react
//向组件中传值，使用props的方式
//构造函数形参接收数据
//cp1
import React from 'react'
function cp1(props) {//小组件里面也要引入React 有react 才是jsx
    return (
        <div>
            <p>this is a little component</p>
            <h2>{props.data.name}</h2>
            {/* 这里在counstucto.js中render时候已经传进来了，用props接一下 */}
        </div>
    )
}
export default cp1

//cp2
import React from 'react'
import ReactDom from 'react-dom'
import Cp1 from './cp1'

const data = {name: 'hh'}
function component (props) {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <Cp1/>
        </div>
    )
}
{/* react 会将属性包装成一个对象 传到目标组件中 */}
{/* 构造函数声明组件间的props传值 */}
{/* props传递数组对象等数据都可以，类似vue */}
ReactDom.render(<Cp1 data ={ data }/>,document.getElementById('app'))
```

##### 类声明继承

```react
//function 这种构造函数有变量提升，但是class没有变量提升，因此在调用类之前必须声明
//类的继承
class Speak {
    constructor(){
        this.name = 'longlongago'
    }
}
class People extends Speak {
    constructor(){
        super()//如果子类需要调用constructor 必须先调用super来实现父类
    }
    haha(){
        console.log(this.name)
    }
}
var pp = new People()
pp.haha()
```

##### 类组件，prop

```react
import React from 'react'
import ReactDom from 'react-dom'

const data = {name: '河洛', age: 12}
//类组件必须继承React.Component
class Hello extends React.Component{
    //想要拿到其他传递到Hello组件中的值props
    //必须要有个render方法，在render方法中返回jsx
    render(){
        return (
            <div>
                <h4>this is class component</h4>
                {/* 类组件中直接使用this.props可以获取到属性值 */}
                <h1>
                    {this.props.data.name}
                </h1>
            </div>
        )
    }
}
//类名作标签名使用
//类组件中，props是以对象属性的方式存在的，构造函数中是以形参的方式传入的 都尽量以props不要改变
ReactDom.render(<Hello data={data}/>, document.getElementById('app'))
```

###### 事件。

```react
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
----------------
class里面的this
class App extends React.Component {
    constructor (){
        super()
        this.state = {
            name: 'haha',
            age: 12,
        }
    }
    funs(){
        console.log('类部私有方法')
        // 此时this指向该环境，即funs函数所在的环境,this指向的不是该组件的App与funs
        // 所以想要拿到上一个环境的this 那么需要使用到箭头函数，才能拿到这个组件的数据
        console.log(this.state)
    }
    funs2 = () =>{//使用箭头函数才能拿到app组件里面的state
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                {/* 在类组件中使用类内部的方法当作事件处理程序直接调用this */}
                <button onClick={ this.funs2 }> this is a button </button>
            </div>
        )
    }
}


```

##### 双单向数据绑定

```react
import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            name: 'qy',
            age: 22,
        }
    }
    changeName = ()=> {
        this.setState({
            name: 'qingyi'//改变数据，this.setState({})传什么改什么，不传不该
        })
    }
    changeAge = (ev) => {
        this.setState({
            age: ev.target.value
        }) 
    }
    refDom = () => {
        this.refs.input1.value = 'hhhhhhhhhhhhh'
        this.setState({
            age: this.refs.input1.value
        })
    }
    render(){
        return (
            <div>
                <h2>hello im { this.state.name }</h2>
                <button onClick = { this.changeName }>改名</button>
                {/* react中双向数据绑定只有通过onChange事件 */}
                <input ref="input1" onChange = { this.changeAge } value = {this.state.age}/>
                <input style={{background: '#fff',borderStyle: 'none',border: '1px solid gray',padding: '2px 4px'}} value = {this.state.age}/>
                <h2>双向数据绑定 { this.state.age }</h2>
                <button onClick = {this.refDom}>ref 操作</button>
            </div>
        )
    }
}

```

