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

