import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

import Homepage from '../pages/homepage/Homepage'
import Products from '../pages/products/Products'
import Favorites from '../pages/favorites/Favorites'
import Contact from '../pages/contact/Contact'
import About from '../pages/about/About'
import AboutProduct from '../pages/products/about product/AboutProduct'

const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/favourites' element={<Favorites />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id' element={<AboutProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
