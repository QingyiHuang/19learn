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