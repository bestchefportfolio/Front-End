import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Component section start
import MyContext from './context/myContext';
import Home from './components/home';
// Component section end

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
