import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
    return (
        <div className='absolute inset-0 flex items-center justify-center z-50'>
            <span className='text-4xl animate-spin'><AiOutlineLoading3Quarters /></span>
        </div>
    )
}

export default LoadingSpinner