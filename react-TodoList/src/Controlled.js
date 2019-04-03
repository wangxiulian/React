import React, { Component } from 'react';


// export default class Controlled extends Component{
//     constructor(){
//         super();
//         this.state = {
//             inputValue: 'hello',
//             //isClick: true;
//             list: [1,2,3]
//         }
//     }

//     //受控组件须写受控处理函数
//     handleChange = (e)=>{

//         //console.log(e.target.value);
        
//         this.setState({
//             //inputValue: e.target.value
//             isClick: !this.state/isClick
//         })
//     }

//     handleClick=()=>{
//         // console.log(this.inp.value);

//         let li = this.state.list;
//         li.push(this.state.inputValue);
//         this.setState({
//             list: li
//         })
//     }

//     ComponentDidMount() = ()=>{
//         this.inp.focus();
//     }

//     render(){
//         return(
//             <div>

//                 {/*<input onChange={handleChange} type="text" value={this.state.inputValue} />*/}
//                 <label htmlFor="inp">用户名：</label>
//                 <input id="inp" ref={(inp)=>{this.inp=inp}} type="text" />
//                 <button className={this.state.isClick?'red':'grey'} onClick={this.handleClick}>提交</button>
//                 <ul>
//                     {
//                         this.state.list.map((item,index)=>{
//                             return <li>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }



export default class Controlled extends Component{
    render(){
        return(
            <div></div>
        )
    }
}


