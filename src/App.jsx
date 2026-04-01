import { useState, useEffect } from 'react'
import './App.css'

import CardsContainer from './components/Card/Card'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <main className="main-container">
          <Sidebar />
          <CardsContainer />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
