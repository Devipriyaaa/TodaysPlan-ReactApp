import React from 'react'

const Hero = () => {
    return (
        <div className=" text-black font-bold flex flex-col items-center justify-center gap-5">
            <h1 className=" text-4xl font-bold">Welcome To Today's Plan</h1>
            <p className=" text-6xl font-black">Let's Start Our Success Journey</p>
            <img className="w-1/3" src="https://adra.co.in/cdn/shop/products/Planners6_7eef97eb-d505-40c8-9e0c-3109451b3bf6.jpg?v=1620636666" alt="" />
            <button className="text-black text-2xl font-bold border-4 border-black hover:bg-red-700 rounded-md">
                Get Started
            </button>
        </div>

    )
}
export default Hero