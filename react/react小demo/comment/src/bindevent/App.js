import React from 'react'

class App extends React.Component {
    constructor (){
        super()
        this.state = {
            name: 'haha',
            age: 12,
        }
    }
    funs(){
        console.log('类部私有方法')
        // 此时this指向该环境，即funs函数所在的环境,this指向的不是该组件的App与funs
        // 所以想要拿到上一个环境的this 那么需要使用到箭头函数，才能拿到这个组件的数据
        console.log(this.state)
    }
    funs2 = () =>{//使用箭头函数才能拿到app组件里面的state
        console.log(this.state.name)
    }
    render() {
        return (
            <div>
                {/* 在类组件中使用类内部的方法当作事件处理程序直接调用this */}
                <button onClick={ this.funs2 }> this is a button </button>
            </div>
        )
    }
}
export default App