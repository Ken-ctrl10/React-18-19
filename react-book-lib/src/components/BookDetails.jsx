import { useContext } from 'react';
import { BooksContext } from '../BooksContext';
import { useParams } from 'react-router-dom';
import Books from './Books';

export function BookDetails() {

  const { bookID } = useParams();
  const books = useContext(BooksContext);
  const book = books.find(b => b.id === parseInt(bookID));
  
  if (books.length === 0) {
    return <div>Page Loading...</div>;
  }

  if (book == null ) { // or !book
    return <div>Book not found.</div>
  }

  return <div>
    <h1>{book.title}</h1>
    <h2>by {book.author}</h2>
    <p>{book.description}</p>
  </div>
}
