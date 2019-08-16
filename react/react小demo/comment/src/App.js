import React from 'react';
import './App.css';
import CommentItem from './commentItem'

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
      <CommentItem obj = {this.state.obj} nowtime = {this.state.nowtime}/>
    )
  }
}

export default App;
