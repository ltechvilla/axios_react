import React from 'react'
import './App.css';

import Starrating from './Components/Starrating';
import TodoList from './Components/TodoList';
import Sum1 from './Components/Sum1';

import FetchNews from './Components/FetchNews';

const App = () =>{
 return <>
  <div align="center">
     <Starrating/><br/>
     <Sum1/><br/>
     <TodoList/> <br/>
       <FetchNews/> 
         
  </div>
  </>
}
export default App;
