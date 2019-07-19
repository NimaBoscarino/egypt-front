import React, {useState} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen'
import PyramidScreen from './screens/PyramidScreen'

function App() {
  return (
    <div className="App"
      style={{
        height: '100%'
      }}
    >
      <Router>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/pyramids/:id" component={PyramidScreen} />
      </Router>
      
    </div>
  );
}

export default App;



// {/* <div className="App">
// <h1>Counter</h1>
// <h2>{counter}</h2>
// <h2>{counter2}</h2>
// <button
//   onClick={() => {
//     // increase the counter
//     setCounter(counter + 1)
//   }}
// >Click me!</button>
// <button
//   onClick={() => {
//     // increase the counter
//     setCounter2(counter2 + 1)
//   }}
// >Click me!</button>

// </div> */}