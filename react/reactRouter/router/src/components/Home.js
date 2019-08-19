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