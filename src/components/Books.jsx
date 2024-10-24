// import React, { useState } from 'react';
// import axios from 'axios';

// const Books = () => {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState('');

//   const fetchBookData = async (bookTitle) => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=1`
//       );
//       const data = response.data;
      
//       if (data.items && data.items.length > 0) {
//         const bookInfo = data.items[0].volumeInfo;
//         const newBook = {
//           title: bookInfo.title,
//           author: bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author",
//           category: bookInfo.categories ? bookInfo.categories[0] : "Uncategorized",
//           image: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null,
//         };
//         setBooks((prevBooks) => [...prevBooks, newBook]);
//       } else {
//         alert('No book found with that title.');
//       }
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//       alert('Failed to fetch book details.');
//     }
//   };

//   const addBook = () => {
//     if (title) {
//       fetchBookData(title);
//       setTitle(''); // Clear the input field after adding
//     } else {
//       alert("Please enter a book title.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Add a Book by Title</h2>
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter Book Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={addBook}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Add Book
//           </button>
//         </div>
//       </div>

//       <div className="mt-10 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Book Collection</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {books.map((book, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               {book.image && (
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//               )}
//               <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
//               <p className="text-gray-600">Author: {book.author}</p>
//               <p className="text-gray-600">Category: {book.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Books;


// ---------------------------------------------------------------------------------------------------------- jayanth

// import React, { useState } from 'react';
// import axios from 'axios';

// const Books = () => {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [author, setAuthor] = useState('');
//   const [category, setCategory] = useState('');
//   const [synopsis, setSynopsis] = useState('');
//   const [image, setImage] = useState('');

//   const fetchBookData = async (bookTitle) => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=1`
//       );
//       const data = response.data;

//       if (data.items && data.items.length > 0) {
//         const bookInfo = data.items[0].volumeInfo;
//         setAuthor(bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author");
//         setCategory(bookInfo.categories ? bookInfo.categories.join(", ") : "Uncategorized");
//         setSynopsis(bookInfo.description ? bookInfo.description : "No description available.");
//         setImage(bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null);
//       } else {
//         alert('No book found with that title.');
//         clearFields();
//       }
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//       alert('Failed to fetch book details.');
//     }
//   };

//   const clearFields = () => {
//     setAuthor('');
//     setCategory('');
//     setSynopsis('');
//     setImage('');
//   };

//   const handleTitleChange = (e) => {
//     const bookTitle = e.target.value;
//     setTitle(bookTitle);
//     if (bookTitle) {
//       fetchBookData(bookTitle);
//     } else {
//       clearFields();
//     }
//   };

//   const addBook = () => {
//     if (title && price) {
//       const newBook = {
//         title,
//         author,
//         category,
//         synopsis,
//         price,
//         image,
//       };
//       setBooks((prevBooks) => [...prevBooks, newBook]);
//       clearInputFields();
//     } else {
//       alert("Please enter a book title and price.");
//     }
//   };

//   const clearInputFields = () => {
//     setTitle('');
//     setPrice('');
//     clearFields();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Add a Book</h2>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Book Title</label>
//             <input
//               id="title"
//               type="text"
//               placeholder="Enter Book Title"
//               value={title}
//               onChange={handleTitleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="author">Author</label>
//             <input
//               id="author"
//               type="text"
//               value={author}
//               readOnly
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">Category</label>
//             <input
//               id="category"
//               type="text"
//               value={category}
//               readOnly
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="synopsis">Synopsis</label>
//             <textarea
//               id="synopsis"
//               value={synopsis}
//               readOnly
//               rows="3"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">Price (₹)</label>
//             <input
//               id="price"
//               type="number"
//               placeholder="Enter Price (₹)"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <button
//             type="button"
//             onClick={addBook}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Add Book
//           </button>
//         </form>
//       </div>

//       <div className="mt-10 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Book Collection</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {books.map((book, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md w-350 h-72 flex">
//               {book.image && (
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-32 h-48 object-cover rounded-md mr-4"
//                 />
//               )}
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
//                 <p className="text-gray-600 mb-1">Author: {book.author}</p>
//                 <p className="text-gray-600 mb-1">Category: {book.category}</p>
//                 <p className="text-gray-600">Price: ₹{book.price}</p>
//                 <p className="text-gray-600 mt-2" style={{ overflow: 'auto', maxHeight: '60px' }}>
//                   Synopsis: {book.synopsis}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Books;

import React, { useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [image, setImage] = useState('');

  const fetchBookData = async (bookTitle) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=1`
      );
      const data = response.data;

      if (data.items && data.items.length > 0) {
        const bookInfo = data.items[0].volumeInfo;
        setAuthor(bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author");
        setCategory(bookInfo.categories ? bookInfo.categories.join(", ") : "Uncategorized");
        setSynopsis(bookInfo.description ? bookInfo.description : "No description available.");
        setImage(bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null);
      } else {
        alert('No book found with that title.');
        clearFields();
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      alert('Failed to fetch book details.');
    }
  };

  const clearFields = () => {
    setAuthor('');
    setCategory('');
    setSynopsis('');
    setImage('');
  };

  const handleTitleChange = (e) => {
    const bookTitle = e.target.value;
    setTitle(bookTitle);
    if (bookTitle) {
      fetchBookData(bookTitle);
    } else {
      clearFields();
    }
  };

  const addBook = () => {
    if (title && price) {
      const newBook = {
        title,
        author,
        category,
        synopsis,
        price,
        image,
      };
      setBooks((prevBooks) => [...prevBooks, newBook]);
      clearInputFields();
    } else {
      alert("Please enter a book title and price.");
    }
  };

  const clearInputFields = () => {
    setTitle('');
    setPrice('');
    clearFields();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-300 p-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-4">Add a Book</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Book Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter Book Title"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={author}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              value={category}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              value={synopsis}
              readOnly
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">Price (₹)</label>
            <input
              id="price"
              type="number"
              placeholder="Enter Price (₹)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="button"
            onClick={addBook}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Book
          </button>
        </form>
      </div>

      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Book Collection</h2>
        <div className="flex flex-col items-center ">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-84 h-64 mb-4 flex">
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-md mr-4"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-1"><b>Author:</b> {book.author}</p>
                <p className="text-gray-600 mb-1"><b>Category:</b> {book.category}</p>
                <p className="text-gray-600"><b>Price:</b> ₹{book.price}</p>
                <p className="text-gray-600 mt-2" style={{ overflow: 'auto', maxHeight: '60px' }}>
                  <b>Synopsis:</b> {book.synopsis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default Books;
