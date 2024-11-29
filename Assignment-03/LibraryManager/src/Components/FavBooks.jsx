import React, { useContext } from "react";
import { FavBooksContext } from "../App";

const FavBooks = () => {
  const { favBooks } = useContext(FavBooksContext);

  return (
    <div style={{
      backgroundColor: "#f7f7f7",
      padding: "20px",
      margin: "20px auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "500px",
      textAlign: "center",
    }}>
      <h2 style={{
        color: "#007BFF",
        marginBottom: "15px",
        fontSize: "1.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
        Favourite Books
      </h2>
      {favBooks.length > 0 ? (
        favBooks.map((book) => (
          <p style={{
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
          No favourite books yet.
        </p>
      )}
    </div>
  );
};

export default FavBooks;
