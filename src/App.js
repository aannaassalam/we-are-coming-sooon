import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/comingSoon";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Route exact path="/" component={ComingSoon} />
      </BrowserRouter>
    </div>
  );
}

export default App;
