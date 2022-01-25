import React from 'react'
import MyCard from '../components/MyCard';

function Projects() {
  const projects = [
    {
      name: 'Snippets',
      description: 'lalalalallaalalal'
    },
    {
      name: 'Snippets',
      description: 'lalalalallaalalal'
    },
    {
      name: 'Snippets',
      description: 'lalalalallaalalal'
    }
  ]
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Primary hero
          </p>
          <p class="subtitle">
            Primary subtitle
          </p>
        </div>
      </section>

      <div class="columns is-centered ">
        <div class="column">{/*empty */}</div>
        <div class="column">
          {projects.map((project, i) => (
            <div class="notification is-link is-light" key={i}>
              <h3> {project.name}</h3>
              <h6>{project.description}</h6>
              <button class="button is-danger">Github</button>
            </div>
          ))}
        </div>
        <div class="column is-primary">{/*empty */}</div>
      </div>
    </div>
  )
}

export default Projects
