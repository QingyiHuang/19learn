import React from 'react'

class MyEve extends React.Component {
    constructor() {
        super()
        this.state = {
            nu: 0
        }
    }
    //组件
    render () {
        return (
            <div>
                <button onClick = {this.adds}>+1</button>
                <p>{ this.state.nu }</p>
            </div>
        )
    }
    //事件
    adds = () => {
        this.setState({
            nu: this.state.nu + 1
        })
    }
    //组件是否需要被重新渲染 钩子函数
    //结论：只要显示的，定义了shouldComponentUpdate，则必须return 一个bool值
    // shouldComponentUpdate() {
    //     //如果在shouldComponentUpdate中返回了true，则页面会重新渲染
    //     //从而页面和state中数据会保持一致
    //     //如果返回false则页面不会重新渲染，只会更新state中的数据
    //     //return true  值与页面一起改变
    //     //return false 值改变页面不改

    //     //定义一个计数器让偶数的时候页面改变，奇数的时候不改变
    //     if(this.state.nu %2 == 0){
    //         return true
    //     }else {
    //         return false
    //     }
    // }

    //在shouldComponentUpdate中，如果直接从this.state上获取状态值，获取到的是上一次旧的状态
    //如果要获取新的状态值，需要从shouldComponentUpdate的形参列表中定义与接收

    shouldComponentUpdate(nextProps,nextState){
        //在shouldComponentUpdate中，如果直接从this.state中取值，是取上次旧值
        if(nextState.nu %2 === 0){
            return true
        }else{
            return false
        }
    }

    //组件将要重新渲染
    //浏览器的页面还是上一次的旧页面
    componentWillUpdate(nextProps, nextState){
        console.log(nextState.nu)
        console.log(this.state.nu)
    }

    //组件已经完成了重新渲染，此时浏览器中的页面是最新的
    componentDidUpdate(prevProps,preveState) {
        //在componentDidUpdate中，如果想获取最新的props和state，直接访问this.props或者
        //this.state即可
        //如果想获取上一次旧的props和state值，需要通过形参进行接收
        console.log(this.state.nu + 'componentDidUpdataThisState')
        console.log(preveState.nu + 'componentDidUpdatePreveNum')
    }
}

export default MyEve