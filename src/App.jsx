import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  // convert object to string and store in localStorage
  function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  const persistedState = loadFromLocalStorage();
  const [count, setCount] = useState(persistedState?.count || 0);

  // save count to localStorage whenever it changes
  useEffect(() => {
    saveToLocalStorage({ count });
  }, [count]);

  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
