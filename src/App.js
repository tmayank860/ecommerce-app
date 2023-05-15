import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomeView} from './components/Home/HomeView';
import {CartView} from './components/Cart/CartView'

const App = () => {
  return (
    <div>
      <Router>
        // Nav bar to be implemented here
        <Routes>
          <Route exact path="" element={<HomeView/>}/>
          <Route exact path="/cart" element={<CartView/>}/>
          <Route></Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App