import { useState, useEffect } from 'react'
import './App.css'

import CardsContainer from './components/Card/Card'
import Header from './components/Header/Header'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <CardsContainer />
      </ThemeProvider>
    </>
  )
}

export default App
