import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className=" text-white font-bold flex flex-col items-center justify-center gap-5">
            <h1 className=" text-4xl font-bold">Welcome To Today's Plan</h1>
            <p className=" text-6xl font-black">Let's Start Our Success Journey</p>
            <img className="w-1/3" src="" alt="" />
            <button className="text-black text-2xl font-bold border-4 border-black hover:bg-red-700 rounded-md">
                <Link to ="/login">Get Started</Link>
            </button>
        </div>

    )
}
export default Hero