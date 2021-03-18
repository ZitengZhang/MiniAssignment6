import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { SumContextComponent } from './SumContext.js';
//import {DiceContextComponent} from './DiceCotext.js'

//import Reducers from './combineReducer';
//const store = createStore(Reducers);

ReactDOM.render(
        
        
         <SumContextComponent>
            <App/>
        </SumContextComponent>  
        
        // <Provider store={store}>
        // <App />
        // </Provider>
        ,document.getElementById('root'));