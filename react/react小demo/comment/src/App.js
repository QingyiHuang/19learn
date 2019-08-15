import React from 'react';
import './App.css';

var obj = [//组件私有数据
  {id: 1, user: 'ash', content: 'heeehehehehhe'},
  {id: 2, user: 'koha', content: 'mmmmmmmmmmmmmme'},
  {id: 3, user: 'senni', content: 'sfsdfvsdvfsefvvv'},
  {id: 4, user: 'nuna', content: 'sfsfsdvsdvfsdvfds'},
]
var nowtime = new Date().toLocaleDateString()

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      obj,
      nowtime,
    }
  }
  render() {
    return (
      <div>
        <h1>评论列表</h1>
        { this.state.obj.map(item =>{
          return (<div>
          <p><b>评论内容: </b>{ item.content }</p>
          <p><b>评论人: </b>{ item.user }</p>
          <p><b>评论时间: </b>{ this.state.nowtime }</p>
          <hr/>
          </div>
          )
        }) }
        
      </div>
    )
  }
}

export default App;
