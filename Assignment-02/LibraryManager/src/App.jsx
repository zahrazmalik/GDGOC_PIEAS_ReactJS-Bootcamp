import BookAuthors from "./Components/BookAuthors";
import BookCard from "./Components/BookCard";
import BookDetails from "./Components/BookDetails";
import Books from "./Components/books.mjs";
import FictionBooks from "./Components/FictionBooks";
import HighRatedBooks from "./Components/HighRatedBooks";

function App() {
  return (
    <div style={{
      height: "auto",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#008080",  
      padding: "30px",
      textAlign: "center",
      fontFamily: "Brush Script MT', cursive",  
    }}>
      <h1 style={{
        color: "#9EFCFF",   
        fontSize: "2.2rem",  
        marginBottom: "30px",  
      }}>
        Library Manager
      </h1>
      <div style={{ marginBottom: '30px' }}>
        <HighRatedBooks Books={Books} />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <BookDetails Books={Books} />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <FictionBooks Books={Books} />
      </div>
      <div style={{ marginBottom: '30px' }}>
        <BookAuthors Books={Books} />
      </div>
    </div>
  );
}

export default App;
