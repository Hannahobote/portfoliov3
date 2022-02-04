import React from 'react'

function MyCard({ github, link, name, description }) {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-gray-100 p-6 rounded-lg">
      <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{link}</h3>
      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{github}</h3>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{name}</h2>
      <p class="leading-relaxed text-base">{description}</p>
    </div>
    </div>
  )
}

export default MyCard
