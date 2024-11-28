import BookCard from './BookCard';

const FictionBooks = ({ Books }) => {
  const fictionBooks = Books.filter(book => book.genre === 'Fiction');

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{
        color: '#000080',  
        textAlign: 'center',  
        marginBottom: '25px', 
        fontSize: '1.5rem',   
        fontFamily: 'Arial, sans-serif'  
      }}>
        Fictional Books 
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',  
        gap: '5px', 
        color: 'black',
      }}>
        {fictionBooks.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default FictionBooks;
