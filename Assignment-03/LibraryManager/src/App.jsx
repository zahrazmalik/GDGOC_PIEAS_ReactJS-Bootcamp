import React from "react";
import {createContext } from "react";
import { useState } from "react";
import BookAuthors from "./Components/BookAuthors";
import BookCard from "./Components/BookCard";
import BookDetails from "./Components/BookDetails";
import Books from "./Components/books.mjs";
import FictionBooks from "./Components/FictionBooks";
import HighRatedBooks from "./Components/HighRatedBooks";
import BorrowedBooks from "./Components/BorrowedBooks";
import FavBooks from "./Components/FavBooks";

export const BorrowedBooksContext =createContext();
export const FavBooksContext=createContext();

function App() {

   const [borrowedBooks,setBorrowedBooks]=useState([]);
   const [favBooks,setFavBooks]=useState([]);

  return (
    <FavBooksContext.Provider value={{favBooks,setFavBooks}}>
      <BorrowedBooksContext.Provider value={{borrowedBooks,setBorrowedBooks}}>
      <div style={{
      height: "auto",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff3d6",  
      padding: "30px",
      textAlign: "center",
      fontFamily: "Brush Script MT', cursive",  
    }}>
      <h1 style={{
        color: "#828194",   
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
     
      <BorrowedBooks/>
    <FavBooks/>
    </div>
   
    

      </BorrowedBooksContext.Provider>
    </FavBooksContext.Provider>
    
  );
}

export default App;
