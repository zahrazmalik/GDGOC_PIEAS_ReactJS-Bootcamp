import BookCard from './BookCard';

const HighRatedBooks = ({ Books }) => {
  const highRated = Books.filter(book => book.rating > 4.5);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{
        color: '#000080',  
        textAlign: 'center',
        marginBottom: '20px',  
        fontSize: '1.6rem',  
        fontFamily: 'Tahoma, sans-serif', 
      }}>
        Books with rating higher than 4.5:
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly', 
        gap: '25px', 
        marginTop: '20px',
        color: 'black',
      }}>
        {highRated.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HighRatedBooks;
