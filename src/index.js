import React, { createContext, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';




let rootReducer=(preState , action)=>{

let newState = preState

switch(action.type){
  case 'A':
   break;
   

    default:
      return newState;
}

return newState;

}

const store = createStore(rootReducer,{name:'OKLABS'})


console.log( store.getState())

let data = store.getState().name;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   

    <App props={data}/>
   
   

   
  </React.StrictMode>
);

