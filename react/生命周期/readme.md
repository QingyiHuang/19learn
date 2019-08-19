###### react 组件的生命周期

- 在组件创建之前，会先初始化默认的props属性，全局调用一次，在组件被创建并加载的时候会首先调用constructor构造器中的this.state = ｛｝，来初始化组件的状态

```javascript
//组件声明周期执行顺序
Mounting:
	constructor()
	componentWillMount()    //能使用setState()
	render()
	componentDidMount()     //能使用setState()
Updating:
	componentWillReceiveProps(nextProps)     //能使用setState()父组件传值
	shouldComponentUpadate(nextProps,nextState)     //时候渲染页面
	componentWillUpdate(nextProps,nextState)	//组件update之间需要进行的动作
	render()
	componentDidUpdate(prevProps,prevState)     //组件已经完成了更新
Unmounting:
	componentWillUnmount()
```

