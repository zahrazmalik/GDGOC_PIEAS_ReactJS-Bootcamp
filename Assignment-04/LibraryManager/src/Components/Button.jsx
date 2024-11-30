import React from "react";
import { useContext } from "react";
import { BorrowedBooksContext,FavBooksContext } from "../App";


const Button=({title})=>{
    const {borrowedBooks,setBorrowedBooks}=useContext(BorrowedBooksContext);
    const {favBooks,setFavBooks}=useContext(FavBooksContext);
    const handleBorrowedBooks=()=>{
        setBorrowedBooks([...borrowedBooks, title])
    }

    const handleFavBooks=()=>{
        setFavBooks([...favBooks, title])
    }
    return(
        <div  style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px", 
            marginTop: "10px",
          }}>
            <button onClick={handleBorrowedBooks} style={{
        padding: "8px 15px",
        backgroundColor: "#0bbdde",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",}}>Add Me</button>
            <button onClick={handleFavBooks} style={{
        padding: "8px 15px",
        backgroundColor: "#0bbdde",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",}}>Favourite</button>
        </div>
    )
}

export default Button