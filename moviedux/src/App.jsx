// Components:
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MoviesGrid from './components/MoviesGrid.jsx' 
import WatchList from './components/WatchList.jsx'

import './App.css'
import './styles.css'

function App() {
  
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchllist] = useState([]);

    //here we are loading the data from the json file.
  useEffect(() => {

    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))

  }, []);

  const toggleWatchlist = (movieID) => {
    setWatchllist(prev => 
      prev.includes(movieID) ? prev.filter(id => id !== movieID) 
      : [...prev, movieID]
    )
  }

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
            <Route path='/' element={<MoviesGrid watchlist={watchlist} 
                            movies = {movies}  
                            toggleWatchList = {toggleWatchlist}/>}></Route>
            <Route path='/watchlist' element={<WatchList watchlist={watchlist} 
                                      movies = {movies} 
                                      toggleWatchList = {toggleWatchlist}/>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App