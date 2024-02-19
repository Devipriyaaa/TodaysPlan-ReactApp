import React from 'react'

const Footer = () => {
  return (
    <div>
        

<footer class="rounded-lg shadow m-4 bg-transparent">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">

        <img className='w-44' src="https://whats.todaysplan.com.au/assets/images/featureset/general/branding/logo-stacked.png" alt=""/>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
               
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" class="hover:underline">Today's List</a>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
  )
}

export default Footer