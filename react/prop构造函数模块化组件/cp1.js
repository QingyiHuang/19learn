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