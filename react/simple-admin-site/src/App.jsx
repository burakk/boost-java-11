import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import viteLogo from '/vite.svg'
import './App.css'

import { Logo } from './components/Logo'
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <header>
        <Logo />

        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ürünler" element={<Products />} />

        </Routes>
      </main>
      <footer>F</footer>
    </>
  )
}

export default App
