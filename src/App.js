import React from 'react'
import Drinks from './pages/drinks/Drinks'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/spylt',
    element: <Drinks />
  }
])