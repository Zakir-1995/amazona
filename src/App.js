import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/screen/Home'
import Cart from './components/screen/Cart'
import SignIn from './components/screen/SignIn'
import Product from './components/screen/Product'


function App() {
  return <>
 <Router>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/product/:id' element={<Product/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/signin' element={<SignIn/>}/>
 </Routes>
 </Router>
  </>;
}

export default App;
