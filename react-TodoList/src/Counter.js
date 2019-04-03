import Reace,{Component} from 'react';
import store from './store';


//store连接action和Reducer的一个对象
//action 是一个对象，描述state的变化
//Reducer 定义了如何响应action描述的state的变化,并发送至store
export default class counter extends Component(){
constructor(){
  super();
  this.state = {
      num:store.getState().counter
  }
  store.subscribe(()=>{
    this.setState({
      num:store.getState().counter
    })
  })
}
handleAdd =()=>{
    let action = {type:'ADD',value:1}
    store.dispatch(action);
}
handleDec=()=>{
    let action = {type:'DEC',value:1}
    store.dispatch(action);
}
handleOdd=()=>{
    let action = {type:'ODD'}
    if(this.state.num %2 !== 0){
        store.dispatch(action);
    } 
}
handleSync=()=>{
    let action = {type:'ADD',value:1}
    setTimeout(() => {
        store.dispatch(action);
    }, 1000);
}
  render(){
    return(
      <div>
        <p>
          Clicked: <span>{this.state.num}0</span> times
          <button onclick={this.handleAdd}>+</button>
          <button onclick={this.handleDec}>-</button>
          <button>Increment if odd</button>
          <button>Increment async</button>
        </p>
      </div>
    )
  }
}
