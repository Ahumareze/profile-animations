import React from 'react'
import Drinks from './pages/drinks/Drinks'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  {
    path: '/drinks',
    element: <Drinks />
  }
])