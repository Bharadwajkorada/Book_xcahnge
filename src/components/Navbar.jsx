// import React, { useState } from 'react'
// import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
// import { BsFillCartFill,BsPerson } from 'react-icons/bs'
// import { TbTruckReturn } from 'react-icons/tb'
// import { FaGoogleWallet } from 'react-icons/fa'
// import { MdHelp,MdOutlineFavorite } from 'react-icons/md'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     const [SideNav, setSideNav] = useState(false)
//     console.log(SideNav)
//     return (
//         <div>
//             <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
//                 <div className='flex'>
//                     {/* <div className='cursor-pointer mt-1'>
//                         <AiOutlineMenu size={25} />
//                     </div> */}
//                     <div onClick={() => setSideNav(!SideNav)} className='cursor-pointer mt-1'>
//                         <AiOutlineMenu size={25} />
//                     </div>
//                     <div className=" ml-2 text-2xl font-bold text-gray-800 cursor-pointer">
//                         BookBridge
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
//                         <AiOutlineSearch size={25} />
//                         <input className=' bg-transparent p-2 w-full focus:outline-none '
//                             type="text" placeholder='Search Books' />

//                     </div>
//                     <Link to='/login'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
//                             Login
//                         </button>
//                     </Link>
//                     <Link to='/signup'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
//                             SignUp
//                         </button>
//                     </Link>
//                     <Link to='/books'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
//                             Add Book
//                         </button>
//                     </Link>
//                 </div>
//             </nav>
//             {
//                 SideNav ? (<div onClick={() => setSideNav(!SideNav)} className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0 duration-100'></div>) : (" ")
//             }
//             <div className={SideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
//                 : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
//                 <AiOutlineClose size={25} onClick={() => setSideNav(!SideNav)} className='cursor-pointer absolute right-4 top-4' />
//                 <h1 className='text-3xl  p-3'>Yum
//                     <span className='text-red-700 font-bold'>Eats</span>
//                 </h1>
//                 <ul className='flex flex-col p-4 text-gray-900'>
//                     <li className='text-xl py-4 flex'>
//                     <BsPerson size={25} className='rounded-full mr-4 text-white bg-black'/> My Account
//                     </li>
//                     <li className='text-xl py-4 flex'>
//                     <TbTruckReturn size={25} className='rounded-full mr-4 text-white bg-black'/> Delivery
//                     </li>
//                     <li className='text-xl py-4 flex'>
//                     <MdOutlineFavorite size={25} className='rounded-full mr-4 text-white bg-black'/> My Favorite
//                     </li>
//                     <li className='text-xl py-4 flex'>
//                     <FaGoogleWallet size={25} className='rounded-full mr-4 text-white bg-black'/> My Wallet
//                     </li>
//                     <li className='text-xl py-4 flex'>
//                     <MdHelp size={25} className='rounded-full mr-4 text-white bg-black'/> Help
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar

// Main code

// import React, { useState } from 'react'
// import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
// import { BsPerson } from 'react-icons/bs'
// import { TbTruckReturn } from 'react-icons/tb'
// import { FaGoogleWallet } from 'react-icons/fa'
// import { MdHelp, MdOutlineFavorite } from 'react-icons/md'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     const [SideNav, setSideNav] = useState(false)

//     return (
//         <div>
//             <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
//                 <div className='flex'>
//                     <div onClick={() => setSideNav(!SideNav)} className='cursor-pointer mt-1'>
//                         <AiOutlineMenu size={25} />
//                     </div>
//                     <div className="ml-2 text-2xl font-bold text-gray-800 cursor-pointer">
//                         BookBridge
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
//                         <AiOutlineSearch size={25} />
//                         <input className=' bg-transparent p-2 w-full focus:outline-none'
//                             type="text" placeholder='Search Books' />
//                     </div>
//                     <Link to='/login'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                             Login
//                         </button>
//                     </Link>
//                     <Link to='/'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                           ChatBot
//                         </button>
//                     </Link>
//                     <Link to='/books'>
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                             Add Book
//                         </button>
//                     </Link>
//                 </div>
//             </nav>

//             {/* Background overlay with grey transition */}
//             {SideNav ? (
//                 <div
//                     onClick={() => setSideNav(!SideNav)}
//                     className={`fixed w-full h-screen top-0 left-0 z-10 transition-all duration-300 ease-in-out ${SideNav ? 'bg-gray-900/90' : 'bg-transparent'}`}>
//                 </div>
//             ) : null}

//             {/* Sidebar with synchronized transition */}
//             <div className={SideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
//                 : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
//                 <AiOutlineClose size={25} onClick={() => setSideNav(!SideNav)} className='cursor-pointer absolute right-4 top-4' />
//                 {/* <h1 className='text-3xl p-3'>Book
//                     <span className='text-red-700 font-bold'>Bridge</span>
//                 </h1> */}
//                 <h1 className="text-3xl p-3">
//                         BookBridge
//                 </h1>
//                 <ul className='flex flex-col p-4 text-gray-900'>
//                     <li className='text-xl py-4 flex'>
//                         <TbTruckReturn size={25} className='rounded-full mr-4 text-white bg-black' /> Delivery
//                     </li>
//                     <li className='text-xl py-4 flex'>
//                         <MdOutlineFavorite size={25} className='rounded-full mr-4 text-white bg-black' /> My Favorite
//                     </li>
//                     <Link to='/signup'>
//                     <li className='text-xl py-4 flex'>
//                         <BsPerson size={25} className='rounded-full mr-4 text-white bg-black' /> Create Account
//                     </li>
//                     </Link>
//                     <li className='text-xl py-4 flex'>
//                         <MdHelp size={25} className='rounded-full mr-4 text-white bg-black' /> Help
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar


// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
// import { BsPerson } from 'react-icons/bs';
// import { TbTruckReturn } from 'react-icons/tb';
// import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [SideNav, setSideNav] = useState(false);

//     return (
//         <div>
//             <nav className="bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg p-4 flex justify-between items-center">
//                 <div className="flex">
//                     <div
//                         onClick={() => setSideNav(!SideNav)}
//                         className="cursor-pointer mt-1 text-white"
//                     >
//                         <AiOutlineMenu size={25} />
//                     </div>
//                     <div className="ml-3 text-3xl font-extrabold text-white cursor-pointer tracking-wider">
//                         BookBridge
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-6">
//                     <div className="bg-white rounded-full flex items-center px-3 w-[200px] sm:w-[350px] lg:w-[450px] shadow-lg">
//                         <AiOutlineSearch size={25} className="text-gray-600" />
//                         <input
//                             className="bg-transparent p-2 w-full focus:outline-none text-gray-700"
//                             type="text"
//                             placeholder="Search Books"
//                         />
//                     </div>
//                     <Link to="/login">
//                         <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
//                             Login
//                         </button>
//                     </Link>
//                     <Link to="/">
//                         <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
//                             ChatBot
//                         </button>
//                     </Link>
//                     <Link to="/books">
//                         <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
//                             Add Book
//                         </button>
//                     </Link>
//                 </div>
//             </nav>

//             {/* Background overlay with grey transition */}
//             {SideNav && (
//                 <div
//                     onClick={() => setSideNav(false)}
//                     className="fixed w-full h-screen top-0 left-0 z-10 bg-gray-900/80 transition-all duration-300 ease-in-out"
//                 />
//             )}

//             {/* Sidebar with synchronized transition */}
//             <div
//                 className={
//                     SideNav
//                         ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 shadow-2xl transition-all duration-300 ease-in-out'
//                         : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 transition-all duration-300 ease-in-out'
//                 }
//             >
//                 <AiOutlineClose
//                     size={25}
//                     onClick={() => setSideNav(false)}
//                     className="cursor-pointer absolute right-4 top-4 text-gray-700"
//                 />
//                 <h1 className="text-3xl font-bold p-5 text-indigo-600 border-b border-gray-200">
//                     BookBridge
//                 </h1>
//                 <ul className="flex flex-col p-6 text-gray-800 space-y-6">
//                     <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
//                         <TbTruckReturn
//                             size={25}
//                             className="text-indigo-600"
//                         />
//                         <span>Delivery</span>
//                     </li>
//                     <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
//                         <MdOutlineFavorite
//                             size={25}
//                             className="text-red-500"
//                         />
//                         <span>My Favorite</span>
//                     </li>
//                     <Link to="/signup">
//                         <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
//                             <BsPerson
//                                 size={25}
//                                 className="text-blue-500"
//                             />
//                             <span>Create Account</span>
//                         </li>
//                     </Link>
//                     <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
//                         <MdHelp
//                             size={25}
//                             className="text-green-500"
//                         />
//                         <span>Help</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [SideNav, setSideNav] = useState(false);

    return (
        <div>
            <nav className="bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg p-4 flex justify-between items-center">
                <div className="flex">
                    <div
                        onClick={() => setSideNav(!SideNav)}
                        className="cursor-pointer mt-1 text-white"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                    <div className="ml-3 text-3xl font-extrabold text-white cursor-pointer tracking-wider">
                        BookBridge
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="bg-white rounded-full flex items-center px-3 w-[200px] sm:w-[350px] lg:w-[450px] shadow-lg">
                        <AiOutlineSearch size={25} className="text-gray-600" />
                        <input
                            className="bg-transparent p-2 w-full focus:outline-none text-gray-700"
                            type="text"
                            placeholder="Search Books"
                        />
                    </div>
                    <Link to="/login">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
                            Login
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
                            ChatBot
                        </button>
                    </Link>
                    <Link to="/books">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-500 transition ease-in-out duration-300">
                            Add Book
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Background overlay with grey transition */}
            {SideNav && (
                <div
                    onClick={() => setSideNav(false)}
                    className="fixed w-full h-screen top-0 left-0 z-10 bg-gray-900/80 transition-all duration-300 ease-in-out"
                />
            )}

            {/* Sidebar with darker blue color scheme */}
            <div
                className={
                    SideNav
                        ? 'fixed top-0 left-0 w-[300px] h-screen bg-blue-400 z-20 shadow-2xl transition-all duration-300 ease-in-out'
                        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-blue-400 z-20 transition-all duration-300 ease-in-out'
                }
            >
                <AiOutlineClose
                    size={25}
                    onClick={() => setSideNav(false)}
                    className="cursor-pointer absolute right-4 top-4 text-white"
                />
                <h1 className="text-3xl font-bold p-5 text-white border-b border-blue-300">
                    BookBridge
                </h1>
                <ul className="flex flex-col p-6 text-white space-y-6">
                    <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-blue-500 p-3 rounded-lg">
                        <TbTruckReturn size={25} className="text-blue-300" />
                        <span>Delivery</span>
                    </li>
                    <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-blue-500 p-3 rounded-lg">
                        <MdOutlineFavorite size={25} className="text-blue-300" />
                        <span>My Favorite</span>
                    </li>
                    <Link to="/signup">
                        <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-blue-500 p-3 rounded-lg">
                            <BsPerson size={25} className="text-blue-300" />
                            <span>Create Account</span>
                        </li>
                    </Link>
                    <li className="text-xl flex items-center space-x-4 cursor-pointer hover:bg-blue-500 p-3 rounded-lg">
                        <MdHelp size={25} className="text-blue-300" />
                        <span>Help</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

