import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row p-2 justify-between text-xl text-white items-center">
<img className='w-60'bg-cover src=""/>

      <div className=" text-black font-bold hidden md:flex flex-col md:flex-row gap-5 items-center">
        
        <button className='text-white font-bold border-4 border-black rounded-md hover:bg-red-500'>
            SignIn
          </button>

      </div>
      <div className="flex md:hidden item-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>



      </div>

    </div>


  )
}

export default Navbar