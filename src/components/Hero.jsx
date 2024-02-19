import React from 'react'

const Hero = () => {
    return (
        <div className=" text-white font-bold flex flex-col items-center justify-center gap-5">
            <h1 className=" text-4xl font-bold">Welcome To Today's Plan</h1>
            <p className=" text-6xl font-white">Let's Start Our Success Journey</p>
            
            <button className="text-white text-2xl font-bold border-4 border-white hover:bg-red-700 rounded-md p-1">
                Get Started
            </button>
        </div>

    )
}
export default Hero