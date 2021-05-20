import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/Home'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" >
          <Home />
        </Route>

      </BrowserRouter>
    </div>
  );
}

