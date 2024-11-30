import React, { useEffect } from "react";
import {createContext } from "react";
import { useState } from "react";
import BookList from "./Components/BookList";
import BorrowedBooks from "./Components/BorrowedBooks";
import FavBooks from "./Components/FavBooks";

export const BorrowedBooksContext =createContext();
export const FavBooksContext=createContext();
export const BooksContext=createContext();

function App() {

   const [books,setBooks]=useState([]);
   const [borrowedBooks,setBorrowedBooks]=useState([]);
   const [favBooks,setFavBooks]=useState([]);

   useEffect(()=>{
    const fetchBooks=async ()=>{
      try {
        const response =await fetch('http://localhost:5110/books');
        const book = await response.json();
        setBooks(book);

        
      } catch (error) {
        console.log(error)
        
      }
    }
    fetchBooks();
   },[]

   );

  return (
    <BooksContext.Provider value={{books}}>
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
        <BookList />
      </div>
     
     
      <BorrowedBooks/>
    <FavBooks/>
    </div>
   
    </BorrowedBooksContext.Provider>
    </FavBooksContext.Provider>
    </BooksContext.Provider>
    
  );
}

export default App;
