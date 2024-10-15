import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
                <div className='flex'>
                    <div className='cursor-pointer mt-1'>
                        <AiOutlineMenu size={25} />
                    </div>
                    <div className=" ml-2 text-2xl font-bold text-gray-800 cursor-pointer">
                        BookBridge
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                        <AiOutlineSearch size={25} />
                        <input className=' bg-transparent p-2 w-full focus:outline-none '
                            type="text" placeholder='Search Books' />

                    </div>
                    <Link to='/login'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
                            Login
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
                            SignUp
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar