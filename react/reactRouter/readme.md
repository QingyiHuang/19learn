###### react-router

`npm i react-router-dom`安装react路由依赖项

```react
appjs中这样引入，当然实际操作的时候需要单独隔离出来
import React from 'react';
import './App.css';

import { HashRouter, Route, Link } from 'react-router-dom'
// HashRouter 表示路由的包裹容器，这个组件，在项目中，只使用唯一的一次

//Route: 表示路由的匹配关系，可以吧每个Route，都看成每个路由规则
//Route属性节点，包含path和component属性，
//其中path表示当前路由规则，要匹配额hash地址，component表示当前路由规则对应要显示的组件

import Home from './components/Home'
import Movie from './components/movie'
import About from './components/about'
function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* HashRouter 里面只能有一个根元素 */}
        <div>
          <h1>路由组件</h1>
          {/* 添加路由跳转链接 */}
          <Link to="/home">首页</Link>
          <Link to="/movie">电影</Link>
          <Link to="/about">关于</Link>
          <hr />
          <Route path="/home" component = {Home}></Route>
          <Route path="/movie" component = {Movie}></Route>
          <Route path="/about" component = {About}></Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

```

###### 嵌套路由，编程式路由，路由传参

```react
import React from 'react'
//home页面中，展示嵌套路由
import { HashRouter, Route, Link } from 'react-router-dom'
import Son from './son'
export default class Home extends React.Component{
    render (){
        return (
            <div>
                this is home page
                <Link to="/home/menu">son</Link>
                <hr />
                <Route path="/home/menu" component = { Son }></Route>
            </div>
        )
    }
}

import React from 'react'
//编程式导航，
/**
 * this.props.history.push('要跳转的路径')跳转到指定页面
 * this.props.history.go(n)向前向后跳转指定个数的历史记录
 * this.props.history.goback()后退一个历史记录
 * this.props.history.goForward()前进一个历史记录
 */
export default class Movie extends React.Component{
    render (){
        return (
            <div>
                this is Movie page
                <button onClick = {this.goMovie}>去月球</button>
            </div>
        )
    }
    goMovie = () => {
        this.props.history.push('/movie/harypote')
    }
}
```

