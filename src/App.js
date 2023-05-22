import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomeView} from './components/Home/HomeView';
import {CartView} from './components/Cart/CartView';
import NavBar from  './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomeView/>}/>
          <Route exact path="/cart" element={<CartView/>}/>
          <Route></Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App