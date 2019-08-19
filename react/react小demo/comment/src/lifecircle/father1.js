import React from 'react'
import MyEve from './WillReceive';

export default class Pro extends React.Component{
    constructor() {
        super()
        this.state = {
            nn: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick = { this.xiugai }> xiu gai prop</button>
                <h1 style = {{ color : 'red', }}>当前props{ this.state.nn }</h1>
                <MyEve nn = {this.state.nn} />
            </div>
        )
    }
    xiugai = () => {
        this.setState({ nn: this.state.nn+1 })
    }
}
