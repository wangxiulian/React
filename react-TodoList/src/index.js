import react,{component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

// import Types from './Types';
// import Controlled from './Controlled';

// import './index.css';
// import App from './App';

// import Dots from './dots';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )


import './index.css';
import "antd/dist/antd.css";
import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
import AuthExample from './Auth/AuthExample';
// import Counter from './Counter';
import TodoList from './TodoList';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

ReactDOM.render(
    <div>
        {/* <Counter/> */}
        {/* <Provider> */}
             <ToDolist />
        {/* </Provider> */}    
    </div>,
    document.getElementById('root')
)

