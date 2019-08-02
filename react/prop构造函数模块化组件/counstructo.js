import React from 'react'
import ReactDom from 'react-dom'
import Cp1 from './cp1'

const data = {name: 'hh'}
function component (props) {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <Cp1/>
        </div>
    )
}
{/* react 会将属性包装成一个对象 传到目标组件中 */}
{/* 构造函数声明组件间的props传值 */}
{/* props传递数组对象等数据都可以，类似vue */}
ReactDom.render(<Cp1 data ={ data }/>,document.getElementById('app'))