// import React, { Component } from 'react';

// import ReactDOM from 'react-dom';
// import App from './App';

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       console.log('render');
      
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//         course:'移动web开发',
//         time:new Date().toLocaleString()
//     }
//     setInterval(()=>{
//         this.setState({
//             time:new Date().toLocaleString()
//         })
//     },1000)
//   }
//     render(){
//       return (   
//           <Fragment>
//               <p>react</p>
//               <p>{this.state.course}</p>
//               <Hello name={this.props.wd}/>
//               <h1>{this.state.time}</h1>                
//           </Fragment>
//       );      
//   }
// }


// export default App;





import React, { Component } from 'react'
import CommentList from './components/CommentList ';
import AddComment from './components/AddComment';
import BlogPost from './hoc-components/BlogPost';

// 组件：UI组件（展示数据）和容器组件（请求数据，写逻辑）
// 木偶组件和智能组件
// components // containers
export default class App extends Component {
    render() {
        return (
            <div>
                <CommentList list="hello" />
                <AddComment />
                <BlogPost id={2}/>
            </div>
        )
    }
}
