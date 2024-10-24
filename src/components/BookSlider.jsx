import React, { useContext } from 'react';
import { BooksContext } from './BooksContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const BookSlider = () => {
  const { books } = useContext(BooksContext);

  if (books.length === 0) {
    return <p className="text-center text-xl mt-10">No books available.</p>;
  }

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Book Collection</h2>
      <Splide options={{ perPage: 3, gap: '1rem', pagination: false, autoplay: true }}>
        {books.map((book, index) => (
          <SplideSlide key={index}>
            <div className="bg-white p-4 rounded-lg shadow-md">
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
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BookSlider;
