import React from 'react'
import { useState, useEffect } from 'react'
const Welcome = () => {
    const book = [" ", "B", "Bo", "Boo", "Book", "BookB", "BookBri", "BookBrid", "BookBridg", "BookBridg", "BookBridge", "Where", "Where You", "Where You Can", "Where You Can Exchange", "Where You Can Exchange Books"]
    const [index, setindex] = useState(9)
    useEffect(() => {
        const a = setInterval(() => {
            setindex((index + 1) % 16)
        }, 500);
        return () => {
            clearInterval(a)
        }
    }, [index])


    return (
        <div className="h-[550px] flex flex-col bg-black">
            <div className=" font-bold text-gray-800 ml-[350px]  mt-[200px]">
                <h1 className='text-4xl'>Welcome To,</h1>
                {
                    index < 11 ? <p className='text-8xl'>{book[index]}</p>:<p className='text-7xl'>{book[index]}</p>
                }
            </div>
        </div>
    )
}

export default Welcome