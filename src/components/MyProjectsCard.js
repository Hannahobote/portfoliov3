import React from 'react'

function MyCard({ github, link, name, description }) {
  //img  = img ? img : "https://dummyimage.com/720x400"
  //console.log(img)
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        {/*
        <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content" />
         */}
        <h2 class="text-lg text-white font-medium title-font mb-4">{name}</h2>
        <p class="leading-relaxed text-base">{description}</p>
        <a href={link} target="blank" class="text-indigo-400 inline-flex items-center mt-4 mx-3">Link to website</a>
        <a href={github} target="blank" class="text-indigo-400 inline-flex items-center mt-4">source code</a>

      </div>
    </div>
  )
}

export default MyCard
