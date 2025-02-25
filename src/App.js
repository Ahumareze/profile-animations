import React from 'react'
import Drinks from './pages/drinks/Drinks'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Furniture from './pages/furniture/Furniture'
// import Brymo from './pages/brymo/Brymo'
import About from './pages/about/About'
import Wizkid from './pages/wizkid/Wizkid'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/spylt',
    element: <Drinks />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/wizkid',
    element: <Wizkid />
  },
  {
    path: '/future-furnitures',
    element: <Furniture />
  }
])