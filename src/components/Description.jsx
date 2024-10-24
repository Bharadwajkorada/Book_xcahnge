import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className='w-full bg-gradient-to-r from-blue-600 to-blue-300 py-2 px-4'>
      <div className='w-[1220px] mx-auto grid md:grid-cols-2'>
        <div 
          className='w-[720px] h-[600px] mx-auto my-4'  
          style={{
            backgroundImage: 'url(/src/components/hand-holding-red-book_1308-175534-removebg-preview.png)', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'contain'
          }}>
        </div>
        <div className='flex flex-col justify-center ml-10'>
          <p className='text-[#00df9a] font-bold'>Book Bridge Platform</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Exchange Books with Ease
          </h1>
          <p>
            Welcome to Book Bridge, the ultimate platform for book lovers to exchange their favorite reads! 
            Whether you’re looking to swap books you’ve already read or find new ones, Book Bridge connects 
            people across the globe. Discover, exchange, and grow your personal library, all from the comfort 
            of your device. Experience limitless possibilities with Book Bridge!
          </p>
          <Link to='/signup'>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Join Now
            </button> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
