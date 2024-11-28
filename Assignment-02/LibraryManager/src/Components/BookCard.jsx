const BookCard = ({ title, author, rating, genre }) => (
    <div style={{
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        padding: '18px',
        margin: '12px',
        width: '270px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 1.2)',
        textAlign: 'left',
        fontFamily:'Verdana,sans-serif',
      }}>
      <h3 style={{
        fontsize:'1.2rem',
        marginBottom:'12px',
        color:'#444',
        textAlign: "center",
      }}>{title}</h3>
      <p style={{
        fontSize: '1rem',
        marginBottom: '8px',
        color: '#666',
      }}><b>Author:</b> {author}</p>
      <p style={{
        fontSize: '1rem',
        color: '#666',
      }}><b>Rating:</b> {rating}</p>
      <p style={{
        fontSize: '1rem',
        color: '#666',
      }}
      ><b>Genre:</b> {genre}</p>
    </div>
  );
  
  export default BookCard;
  