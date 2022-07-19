import React from 'react'
import './index.css';
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import { Route } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';

function App(){
return(
<div className="App">
  <Navbar/>
  <Route exact path="/" component={SignIn}/>
  <Route exact path="/SignUp" component={SignUp}/>
</div>
);
}

export default App;