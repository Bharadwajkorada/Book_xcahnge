// import React from 'react'
// import { useState, useEffect } from 'react'
// const Welcome = () => {
//     const book = [" ", "B", "Bo", "Boo", "Book", "BookB", "BookBri", "BookBrid", "BookBridg", "BookBridg", "BookBridge", "Where", "Where You", "Where You Can", "Where You Can Exchange", "Where You Can Exchange Books"]
//     const [index, setindex] = useState(9)
//     useEffect(() => {
//         const a = setInterval(() => {
//             setindex((index + 1) % 16)
//         }, 500);
//         return () => {
//             clearInterval(a)
//         }
//     }, [index])


//     return (
//         <div className="h-[550px] flex flex-col bg-black">
//             <div className=" font-bold text-gray-800 ml-[350px]  mt-[200px]">
//                 <h1 className='text-4xl'>Welcome To,</h1>
//                 {
//                     index < 11 ? <p className='text-8xl'>{book[index]}</p>:<p className='text-7xl'>{book[index]}</p>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Welcome



// import React, { useState, useEffect } from 'react';

// const Welcome = () => {
//     const book = [
//         " ", "B", "Bo", "Boo", "Book", "BookB", "BookBri", 
//         "BookBrid", "BookBridge", "Where", "Where You", 
//         "Where You Can", "Where You Can Exchange", 
//         "Where You Can Exchange Books"
//     ];
    
//     const [index, setIndex] = useState(9);

//     useEffect(() => {
//         const a = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % book.length);
//         }, 500);
//         return () => {
//             clearInterval(a);
//         };
//     }, [index]);

//     return (
//         <div className="h-[550px] flex flex-col justify-center items-center bg-slate-700">
//             <div className="text-center text-white font-extrabold">
//                 <h1 className="text-5xl mb-5">Welcome To,</h1>
//                 {index < 9 ? (
//                     <p className="text-8xl tracking-wide">{book[index]}</p>
//                 ) : (
//                     <p className="text-5xl tracking-wide">{book[index]}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Welcome;



import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const book = [
        "HELLO WORLD", "B", "Bo", "Boo", "Book", "BookB", "BookBri", 
        "BookBrid", "BookBridge", "Where", "Where You", 
        "Where You Can", "Where You Can Exchange", 
        "Where You Can Exchange Books"
    ];
    
    const [index, setIndex] = useState(9);

    useEffect(() => {
        const a = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % book.length);
        }, 500);
        return () => {
            clearInterval(a);
        };
    }, [index]);

    return (
        <div className="h-[590px] flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-300">
            <div className="text-center text-white font-extrabold">
                <h1 className="text-5xl mb-5">Welcome To,</h1>
                {index < 9 ? (
                    <p className="text-8xl tracking-wide">{book[index]}</p>
                ) : (
                    <p className="text-5xl tracking-wide">{book[index]}</p>
                )}
            </div>
        </div>
    );
};

export default Welcome;
