import React, { useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');

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

  const addBook = () => {
    if (title) {
      fetchBookData(title);
      setTitle(''); // Clear the input field after adding
    } else {
      alert("Please enter a book title.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add a Book by Title</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addBook}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Book
          </button>
        </div>
      </div>

      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Book Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Category: {book.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
