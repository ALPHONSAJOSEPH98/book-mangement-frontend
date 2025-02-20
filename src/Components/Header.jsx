import React from 'react'
import { Link } from 'react-router-dom'
import AddBooks from './AddBooks'

function Header() {
  return (
    <div>
        <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          
          
          <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
         <Link to="/">
         <img class="h-8 w-auto rounded-full" src="https://th.bing.com/th/id/OIP.R3YldZT3OWWo5vDSv3vNZQAAAA?rs=1&pid=ImgDetMain" alt="Your Company"/>
         </Link>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            
            <a href="/dashboard" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
            
           
          </div>
         
        </div>
        <div className='ms-1' >
            <AddBooks/>
          </div>
      </div>
     </div>
</div>
  
  
  
</nav>
    </div>
  )
}

export default Header