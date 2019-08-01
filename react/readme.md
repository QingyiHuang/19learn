`npm install create-react-app -g`

`create-react-app appname`创建react app

##### JSX

```react
//react 提供的JSX语法
//1、标签最好使用成对标签
//2、单标签必须有闭合  <input />
//3、jsx以react.createElement()去创建节点，然后在render到目标节点上
//4、使用{}展示变量内容
import React from 'react'
import ReactDom from 'react-dom'
var mydiv = <h1>jsx语法</h1> //XML语法
    
let obj = {name: 'haha'}
var mydiv2 = <div>
    	<h1>hello{obj.name}</h1>
        <h2>{str? 1 : 0}</h2>
        {/*这是jsx语法注释*/}
        {/*jsx语法的内容可以相互嵌套添加使用*/}
    </div>

ReactDom.render(mydiv,document.getElementById('app'))
```