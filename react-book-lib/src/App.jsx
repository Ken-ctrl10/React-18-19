import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { BooksProvider } from './BooksContext'
import { BookDetails } from './components/BookDetails';
import NotFound from './components/NotFound';
import Books from './components/Books'

import './App.css'

function App() {

  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
          <Route path='/books' element={<Navigate to="/"/>}></Route>
          <Route path='/books/:bookID' element={<BookDetails />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </BooksProvider> 
  )
}

export default App
