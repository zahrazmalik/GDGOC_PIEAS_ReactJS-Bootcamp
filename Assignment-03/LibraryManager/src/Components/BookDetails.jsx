import BookCard from './BookCard';

const BookDetails = (props) => (
  <div>
    <h2 style={{ color: '#000080', textAlign: 'center', marginBottom: '20px' }}>Available Books</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',  
      gap: '20px',  
      marginTop: '20px',
      color: "black"
    }}>
      {props.Books.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  </div>
);

export default BookDetails;
