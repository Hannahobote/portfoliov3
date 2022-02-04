import React from 'react'

function MyCard({ github, link, name, description }) {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
        <h2 class="text-lg text-white font-medium title-font mb-4">{name}</h2>
        <p class="leading-relaxed text-base">{description}</p>
        <a href={github} class="text-indigo-400 inline-flex items-center mt-4 mx-3">Link to website</a>
        <a href={link} class="text-indigo-400 inline-flex items-center mt-4">source code</a>

      </div>
    </div>
  )
}

export default MyCard
