import React from 'react'
import MyProjectsCard from '../components/MyProjectsCard'

function Projects() {
  const projects = [
    {
      name: 'Snippets',
      description: 'lalalalallaalalal',
      link: 'here'
    },
    {
      name: 'Webhooks',
      description: 'lalalalallaalalal',
      link: 'here'
    },
    {
      name: 'Picture it',
      description: 'lalalalallaalalal',
      link: 'here'
    },
    {
      name: 'PWA',
      description: 'lalalalallaalalal',
      link: 'here'
    }
  ]
  const projectCard = projects.map((item, i) =>
    <MyProjectsCard
      github={item.link}
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
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>

        <h1 className='text-white  text-4xl'>Stack</h1>
      <p className='text-left text-slate-400  my-5 mx-5'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium corporis ab dicta ut voluptatibus assumenda quas cupiditate id quasi officia pariatur aperiam rem quia aliquam, explicabo labore quo eum. Iste molestias sit eos dolorem, qui ut labore obcaecati consequatur animi explicabo possimus non maiores voluptatem eius quasi excepturi culpa perspiciatis! Distinctio amet laboriosam velit dicta eaque assumenda officiis dolore qui quisquam enim aspernatur tenetur tempora hic eos inventore corrupti delectus error, officia a tempore, quibusdam sapiente architecto temporibus possimus?
      </p>
      
        <div class="flex flex-wrap -m-4">
        {projectCard}
        </div>
      </div>
    </section>
  )
}

export default Projects
