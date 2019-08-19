import React from 'react'

export default class MyEve extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            nu: props.nn
        }
    }
    render() {
        return (
            <div>
                <button onClick= {this.adds}>+1</button>
                <h1>{ this.state.nu }</h1>
            </div>
        )
    }
    adds = () =>{
    //调用父组件传入的函数，将子组件的数据传入回调
        this.props.fun(this.state.nu + 1)
        this.setState({ nu: this.state.nu+1 })
        console.log(this.state.nu)
    }
}