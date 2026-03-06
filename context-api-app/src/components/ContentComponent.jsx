import ThemeContext from '../context/ThemeContext.js' 
import { useContext } from 'react'

export default function ContentComponent(){

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
  <div>
    Current Theme {theme}
    <button onClick={toggleTheme}>Toggle Theme</button>
  </div>  
  )
}