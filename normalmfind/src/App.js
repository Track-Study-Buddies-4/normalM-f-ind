import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';



import Events from './pages/Events';
import SingleEvent from './pages/SingleEvent';

import Error from './pages/Error';


import {Route, Switch} from 'react-router-dom';

import  Navbar from './components/Navbar';


function App() {

    /** 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );  **/
  
  return ( 
    <>
    <Navbar/>
    <Switch>
    <Route exact path= "/" component = {Home}   />
    <Route exact path= "/events/" component = {Events}   /> 
    <Route exact path= "/events/:slug" component = {SingleEvent}   />
    <Route component={Error}/>
    </Switch>





    </>  
  );




}

export default App;
