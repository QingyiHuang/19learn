import React from 'react'
import ReactDom from 'react-dom'

const data = {name: '河洛', age: 12}
//类组件必须继承React.Component
class Hello extends React.Component{
    //想要拿到其他传递到Hello组件中的值props
    //必须要有个render方法，在render方法中返回jsx
    render(){
        return (
            <div>
                <h4>this is class component</h4>
                {/* 类组件中直接使用this.props可以获取到属性值 */}
                <h1>
                    {this.props.data.name}
                </h1>
            </div>
        )
    }
}
//类名作标签名使用
//类组件中，props是以对象属性的方式存在的，构造函数中是以形参的方式传入的 都尽量以props不要改变
ReactDom.render(<Hello data={data}/>, document.getElementById('app'))