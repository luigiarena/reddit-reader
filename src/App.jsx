import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { CardDetails, CardsContainer } from './components/Card/Card'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <Router>
      <ThemeProvider>
        <Header />
        <main className="main-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<CardsContainer />} />
            <Route path="/category/:categoryName" element={<CardsContainer />} />
            <Route path="/news/:titolo" element={<CardDetails />} />
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  )
}

export default App
