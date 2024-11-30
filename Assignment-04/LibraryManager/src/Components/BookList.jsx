import BookCard from './BookCard';
import React,{useContext} from 'react';
import { BooksContext } from '../App';
const BookList = () => {
  const {books} =useContext(BooksContext);
  return(<div>
    <h2 style={{ color: '#000080', textAlign: 'center', marginBottom: '20px' }}>Available Books</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',  
      gap: '20px',  
      marginTop: '20px',
      color: "black"
    }}>
      {books.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  </div>
  );
  

}


export default BookList;
