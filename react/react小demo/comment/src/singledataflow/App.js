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
