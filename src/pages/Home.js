import React from 'react'
import icon from '../img/icon.png'


function Home() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Hello Im Hannah
            <br class="hidden lg:inline-block" /> an inspiring fullstack developer
          </h1>
          <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LinkedIn</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">GitHub</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded lg:visible sm:invisible" alt="hero" style={{ width: '350px', height: '350px' }} src={icon} />
        </div>
      </div>

      {/* content */}
      <div className='container mx-auto py-24 px-24 items-center'>
      <h1 className='text-indigo-500 text-4xl'>About me</h1>
      <p  className='text-left text-black  my-5 mx-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium corporis ab dicta ut voluptatibus assumenda quas cupiditate id quasi officia pariatur aperiam rem quia aliquam, explicabo labore quo eum. Iste molestias sit eos dolorem, qui ut labore obcaecati consequatur animi explicabo possimus non maiores voluptatem eius quasi excepturi culpa perspiciatis! Distinctio amet laboriosam velit dicta eaque assumenda officiis dolore qui quisquam enim aspernatur tenetur tempora hic eos inventore corrupti delectus error, officia a tempore, quibusdam sapiente architecto temporibus possimus?
      </p>

      <h1 className='text-indigo-500  text-4xl'>Stack</h1>
      <p className='text-left text-black  my-5 mx-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium corporis ab dicta ut voluptatibus assumenda quas cupiditate id quasi officia pariatur aperiam rem quia aliquam, explicabo labore quo eum. Iste molestias sit eos dolorem, qui ut labore obcaecati consequatur animi explicabo possimus non maiores voluptatem eius quasi excepturi culpa perspiciatis! Distinctio amet laboriosam velit dicta eaque assumenda officiis dolore qui quisquam enim aspernatur tenetur tempora hic eos inventore corrupti delectus error, officia a tempore, quibusdam sapiente architecto temporibus possimus?
      </p>
      </div>


    </section>
  )
}

export default Home
