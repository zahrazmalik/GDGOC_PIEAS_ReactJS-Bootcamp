import React, { useContext } from "react";
import { BorrowedBooksContext } from "../App";

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BorrowedBooksContext);

  return (
    <div style={{
      backgroundColor: "#f9f9f9",
      padding: "20px",
      margin: "20px auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "500px",
      textAlign: "center",
    }}>
      <h2 style={{
        color: "#28A745",
        marginBottom: "15px",
        fontSize: "1.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
        Borrowed Books
      </h2>
      {borrowedBooks.length > 0 ? (
        borrowedBooks.map((book) => (
          <p  style={{
            fontSize: "1rem",
            margin: "10px 0",
            color: "#333",
            fontWeight: "500",
          }}>
            {book}
          </p>
        ))
      ) : (
        <p style={{
          fontSize: "1rem",
          margin: "10px 0",
          color: "#555",
        }}>
          No borrowed books yet.
        </p>
      )}
    </div>
  );
};

export default BorrowedBooks;
