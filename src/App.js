import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path= "/" element = {<Home/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
