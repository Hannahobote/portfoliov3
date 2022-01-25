import React from 'react'

function Projects() {
  const projects = [
    {
      name: 'Snippets',
      description: 'lalalalallaalalal',
      link: ''
    },
    {
      name: 'Webhooks',
      description: 'lalalalallaalalal',
      link: ''
    },
    {
      name: 'Picture it',
      description: 'lalalalallaalalal',
      link: ''
    }, 
    {
      name: 'PWA',
      description: 'lalalalallaalalal',
      link: ''
    }
  ]
  return (
    <div>
      <section class="hero is-medium is-light mb-5">
        <div class="hero-body">
          <p class="title">
            Projects
          </p>
          <p class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </div>
      </section>

      <div class="columns is-centered">
        <div class="column">{/*empty */}</div>
        <div class="column">
          {projects.map((project, i) => (
            <div class="box mx-auto" key={i}>
              <h1 className='is-size-3'>{project.name}</h1>
              <h6 className='is-size-5'>{project.description}</h6>
              <button className='button' href={project.link}>Github</button>
            </div>
          ))}
        </div>
        <div class="column is-primary">{/*empty */}</div>
      </div>
    </div>
  )
}

export default Projects
