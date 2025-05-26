import React from 'react'
import Drinks from './pages/drinks/Drinks'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Furniture from './pages/furniture/Furniture'
// import Brymo from './pages/brymo/Brymo'
import About from './pages/about/About'
import Wizkid from './pages/wizkid/Wizkid'
import Ege from './pages/ege/Ege'
import HoverCards from './pages/hover-cards/HoverCards'
import ThemeToggle from './pages/themeToggle/ThemeToggle'
import CursorPlayground from './pages/cursorPlayground/CursorPlayground'
import EyesTracker from './pages/eyesTracker/EyesTracker'
import ThemeChanger from './pages/themeChanger/ThemeChanger'

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
    path: '/ege',
    element: <Ege />
  },
  {
    path: 'hover-cards',
    element: <HoverCards />
  },
  {
    path: 'theme-toggle',
    element: <ThemeToggle />
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
  },
  {
    path: '/cursor',
    element: <CursorPlayground />
  },
  {
    path: '/eyes-tracker',
    element: <EyesTracker />
  },
  {
    path: '/theme-selector',
    element: <ThemeChanger />
  }
])