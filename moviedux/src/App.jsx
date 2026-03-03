// Components:
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MoviesGrid from './components/MoviesGrid.jsx' 
import WatchList from './components/WatchList.jsx'

import './App.css'
import './styles.css'

function App() {
  return (
    <div className="App">

      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/watchlist">
                  Watchlist
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<MoviesGrid />}></Route>
            <Route path='/watchlist' element={<WatchList />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App