import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/Button'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const ligthTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual theme change in theme

  useEffect(() => {
    let htmlClass = document.querySelector('html')
    htmlClass.classList.remove("light", "dark")
    htmlClass.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, ligthTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
