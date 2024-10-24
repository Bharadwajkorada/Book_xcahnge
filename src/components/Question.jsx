// import React from 'react';
// import { FaBook, FaPiggyBank, FaUser, FaCheck, FaArrowLeft, FaTree } from 'react-icons/fa';

// const Question =()=> {
//   return (
//     <div className="container mx-auto  bg-gradient-to-r from-blue-600 to-blue-300">
//       <h2 className="text-3xl font-bold text-center mb-8">Why To Exchange Books?</h2>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaBook className="text-4xl text-center mb-4 " />
//           <p className="text-center text-gray-700">Simple</p>
//           <p className="text-center text-gray-500">Bookexchange is a simple to use platform that is easy for booklovers of all age groups to discover the joy of reading.</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaPiggyBank className="text-4xl text-center mb-4 " />
//           <p className="text-center text-gray-700">Save</p>
//           <p className="text-center text-gray-500">Bookexchange is a social commerce enterprise where booklovers share their treasures.</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaUser className="text-4xl text-center mb-4" />
//           <p className="text-center text-gray-700">Socialise</p>
//           <p className="text-center text-gray-500">Rediscover the joy of sharing, and socialising books.</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mt-8">
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaCheck className="text-4xl text-center mb-4" />
//           <p className="text-center text-gray-700">Convenient</p>
//           <p className="text-center text-gray-500">No more stepping out to buy books.</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaArrowLeft className="text-4xl text-center mb-4 " />
//           <p className="text-center text-gray-700">Less carbon footprint</p>
//           <p className="text-center text-gray-500">Let's leave a lasting legacy and not more carbon footprint!</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center">
//           <FaTree className="text-4xl text-center mb-4 " />
//           <p className="text-center text-gray-700">Less for more</p>
//           <p className="text-center text-gray-500">Classics, best sellers and even some rare books costa fortune are here at bookexchange for you.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Question;

import React from 'react';
import { FaBook, FaPiggyBank, FaUser, FaCheck, FaArrowLeft, FaTree } from 'react-icons/fa';

const Question = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-blue-600 to-blue-300 py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">
        Why Exchange Books?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaBook className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Simple</p>
          <p className="text-center text-gray-500">
            Bookexchange is a simple to use platform that is easy for booklovers of all age groups to discover the joy of reading.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaPiggyBank className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Save</p>
          <p className="text-center text-gray-500">
            Bookexchange is a social commerce enterprise where booklovers share their treasures.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaUser className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Socialise</p>
          <p className="text-center text-gray-500">
            Rediscover the joy of sharing, and socialising books.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaCheck className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Convenient</p>
          <p className="text-center text-gray-500">
            No more stepping out to buy books.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaArrowLeft className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Less carbon footprint</p>
          <p className="text-center text-gray-500">
            Let's leave a lasting legacy and not more carbon footprint!
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col justify-center items-center">
          <FaTree className="text-5xl text-blue-600 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">Less for more</p>
          <p className="text-center text-gray-500">
            Classics, best sellers, and even some rare books that cost a fortune are here at Bookexchange for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Question;
