import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='container-md'>
        <div className='row'>
          <section className='intro col mx-5 my-5 text-center'>
            <h1>Hello I'm Hannah Obote,</h1>
            <h1 className='mb-5'>an aspiring fullstack developer </h1>
            <h4>I'm currently a computer science student at Linnaeus University, and will be graduation 2024.</h4>
            <p>I'm currently learning how to build fullstack applications using JavaScript and it's various frameworks at univeristy. <br></br>
              I'm also learning React.js and MERN-stack for a course im taking in March 2022. In the future I plan learn how to build  fullstack applications with Next.js, firebase, nextAuth, TailwindCSS and much more.
            </p>
            <Link to='/commingsoon' className='btn btn-outline-dark'>Ckeck out my projects</Link>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Home
