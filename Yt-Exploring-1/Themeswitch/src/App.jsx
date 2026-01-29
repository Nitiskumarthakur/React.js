import { useEffect, useState } from 'react'

import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  //Actual change in themeMode 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  // useEffect(() => {
  //   const html = document.documentElement;

  //   if (themeMode === "dark") {
  //     html.classList.add("dark");
  //   } else {
  //     html.classList.remove("dark");
  //   }
  // }, [themeMode]);


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className='flex flex-wrap min-h-screen items-center 
                bg-gray-100 dark:bg-gray-900'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn />
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}



export default App
