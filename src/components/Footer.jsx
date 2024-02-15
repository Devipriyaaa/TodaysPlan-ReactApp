import React from 'react'

const Footer = () => {
  return (
    <div>
        

<footer class="rounded-lg shadow dark:bg-gray-900 m-4 bg-transparent">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">

        <img className='w-44' src="https://whats.todaysplan.com.au/assets/images/featureset/general/branding/logo-stacked.png" alt=""/>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
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
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Today's List</a>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
  )
}

export default Footer