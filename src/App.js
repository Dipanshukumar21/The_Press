
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//  import { Router } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/*  A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/' element={<News key='general' category='general' />}></Route>
            <Route path='/general' element={<News key='general' category='general' />}></Route>
            <Route path='/business' element={<News key='business'  category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health'  category='health' />}></Route>
            <Route path='/science' element={<News key='science'  category='science' />}></Route>
            <Route path='/sports' element={<News key='sports'  category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

