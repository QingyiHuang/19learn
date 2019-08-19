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
        this.setState({
            nu: this.state.nu +1
        })
    }
    //props 改变的钩子函数
    componentWillReceiveProps(nextProps){
        console.log(this.state.nu +'this.state')
        console.log(nextProps.nn + 'nextProps')
        this.setState({ nu:nextProps.nn })
    }
}