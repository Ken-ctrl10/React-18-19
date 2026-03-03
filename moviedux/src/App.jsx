// Components:
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MoviesGrid from './components/MoviesGrid.jsx' 


import './App.css'
import './styles.css'

function App() {
  return (
    <div className="App">

      <div className="container">
        <Header />
        <MoviesGrid />        
      </div>
      <Footer />
    </div>
  )
}

export default App