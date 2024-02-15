import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row p-5 justify-between text-xl text-white items-center p-1">
<img className='w-60' src="https://www.filepicker.io/api/file/jsrJwNHkQRFuXd8MUiF7"/>

      <div className=" text-white font-bold hidden md:flex flex-col md:flex-row gap-5 items-center">
        <p className="border-2 border-white rounded-md p-1">Home</p>
      
       <select className="text-black font-bold border-2 border-white rounded-md p-1">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value ="Malayalam">Malayalam</option>

         
        </select>
        <button className='text-white font-bold border-2 border-white rounded-md  p-1'>
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