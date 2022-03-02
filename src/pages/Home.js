import React from 'react'
import icon from '../img/icon.png'


function Home() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font ">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> Hello Im Hannah,
            <br class="hidden lg:inline-block" /> an aspiring fullstack developer
          </h1>
          <p class="mb-8 leading-relaxed text-slate-400"> I'm currently an computer science student at Linnaeus University, and will graduate 2024.
           <br/> My university focuses mainly on teaching how to develop full stack applications. </p>
           
           <div class="flex justify-center">
           <a href="https://www.linkedin.com/in/hannah-obote-61110619a/" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LinkedIn</a>
           <a href="https://github.com/Hannahobote" class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Github</a>
           </div>

       
            {/*
            
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                LinkedIn</button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">GitHub</button>
            </div>
            
            */}
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded lg:visible sm:invisible" alt="hero" style={{ width: '350px', height: '350px' }} src={icon} />
        </div>
      </div>

      {/* content */}
      <div className='container mx-auto  items-center'>
      </div>
    </section>
  )
}

export default Home
