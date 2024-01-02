import React from 'react'

const Hero = () => {
    return (
        <div className=" text-white flex flex-col items-center justify-center gap-5">
            <h1 className=" text-3xl font-bold">Welcome To Today's Plan</h1>
            <p className=" text-5xl font-black">Let's Start Our Success Journey</p>

            <button className="text-white text-2xl border-2 border-white hover:bg-red-700 rounded-md">
                Get Started
            </button>
        </div>

    )
}
export default Hero