import React from 'react'
import MyProjectsCard from '../components/MyProjectsCard'
import pwa from '../img/pwa-example.png'
import snippets from '../img/snippets-example.png'

function Projects() {
  const projects = [
    {
      name: 'PWA',
      description: 'I made an PWA-like app using vanilla JavaScript and utilized custom components.',
      link: 'https://imhannaho-pwa.netlify.app/',
      github: 'https://github.com/Hannahobote/PWA',
      img: {pwa}
    },
    {
      name: 'Snippets',
      description: 'Coming soon',
      link: 'here',
      github: 'here'
    },
    {
      name: 'Webhooks',
      description: 'Coming soon',
      link: 'here',
      github: 'here'
    },
    {
      name: 'Picture it',
      description: 'Coming soon',
      link: 'here',
      github: 'here'
    }
  ]
  const projectCard = projects.map((item, i) =>
    <MyProjectsCard
      img={item.img}
      github={item.github}
      link={item.link}
      name={item.name}
      description={item.description} />
  );

  return (
    <section class="text-gray-400 body-font bg-gray-900">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"> Projects</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400">These are the projects I've working on so far. Most of them are projects made as my university assignments. Im currently learning MERN-stack and Next.js for my personal projects I want to make. I also think it will come in handy for the rest of my university assignments.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {/*
        {projectCard}
           */}
        <MyProjectsCard
          img={pwa}
          name={'PWA'}
          github={'https://github.com/Hannahobote/PWA'}
          description={'I made an PWA-like app using vanilla JavaScript and utilized custom components.'} 
          link={'https://imhannaho-pwa.netlify.app/'} />

        <MyProjectsCard
          img={snippets}
          name={'Snippets'}
          github={'https://github.com/Hannahobote/Snippets'}
          description={'An app where yu can save your code snippets. Link to website coming soon.'} 
          link={'https://imhannaho-pwa.netlify.app/'} 
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
