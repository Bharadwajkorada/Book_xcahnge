import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create a context for books
export const BooksContext = createContext();

// Create a provider component
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Function to fetch book data from Google Books API using Axios
  const fetchBookData = async (bookTitle) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=1`
      );
      const data = response.data;

      if (data.items && data.items.length > 0) {
        const bookInfo = data.items[0].volumeInfo;
        const newBook = {
          title: bookInfo.title,
          author: bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author",
          category: bookInfo.categories ? bookInfo.categories[0] : "Uncategorized",
          image: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null,
        };
        setBooks((prevBooks) => [...prevBooks, newBook]);
      } else {
        alert('No book found with that title.');
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      alert('Failed to fetch book details.');
    }
  };

  return (
    <BooksContext.Provider value={{ books, fetchBookData }}>
      {children}
    </BooksContext.Provider>
  );
};
