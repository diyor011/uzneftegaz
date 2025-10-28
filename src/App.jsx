import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './i18n'
import 'flowbite';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
