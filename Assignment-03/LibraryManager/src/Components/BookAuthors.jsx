const BookAuthors = (props) => {
    const authors = props.Books.map(book => book.author);
  
    return (
      <div style={{ margin: '20px', padding: '10px', maxWidth: '100%' }}>
        <h2 style={{ color: '#000080', textAlign: 'left', marginBottom: '10px' }}>Book Authors</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '10px',
        }}>
          {authors.map((author, index) => (
            <div 
              key={index} 
              style={{
                padding: '5px 10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '0.9rem',
                backgroundColor: '#f9f9f9',
                color:"black"
              }}
            >
              {author}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BookAuthors;
  