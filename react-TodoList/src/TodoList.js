import React, { Component } from 'react';
import { Input } from 'antd';
import store from './store';
import {add_todo, del_todo} from './actions/index';
import {connect} from 'react-redux';

// class TodoList extends Component {
//     constructor(){
//         super();
//         // this.state = {
//         //     list:store.getState().list
//         // }
//         // store.subscribe(()=>{
//         //     this.setState({
//         //         list:store.getState().list
//         //     })
//         // })
//     }
//     //添加item
//     handleAdd = (e)=>{
//         // if(e.keyCode===13){
//         //     store.dispatch({
//         //         type:'add_item',
//         //         value:e.target.value
//         //     })
//         //     document.getElementById('text').value = '';
//         // }
//         if(e.keyCode===13){
//             this.props.dispatch(add_todo(e.target.value));
//             // document.getElementById('text').value = '';
//         }
//     }
//     //点击item删除
//     handleDel(i){
//         store.dispatch({
//             type:'del_item',
//             value:i
//         })
//     }
//     render() {
//         let {list} = this.props;
//         return (
//             <div>
//                 <input onKeyDown={this.handleAdd} type='text' id="text"/><br/>
//                 <ul>
//                     {
//                         list.map((item,index)=>(
//                             <li key={index} onClick={()=>(this.handleDel(index))}>{item}</li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

let TodoList = ({dispatch,list})=>{
    let handleAdd = (e)=>{
        if(e.keyCode===13){
            dispatch(add_todo(e.target.value));
        }
    }
    let handleDel = (index)=>{
        dispatch(del_todo(index));
    }
    return  (
        <div>
            <input onKeyDown={handleAdd} type='text' id="text"/><br/>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index} onClick={()=>handleDel(index)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

// export default TodoList;
let mapStateToProps = (state)=>{
    return {
        list:state
    }
}
export default connect(mapStateToProps)(TodoList);  