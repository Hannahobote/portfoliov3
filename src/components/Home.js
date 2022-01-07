import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='container-md'>
        <div className='row'>
          <section className='intro col mx-5 my-5 text-center'>
            <header className='my-h-font'>
              <h1>Hello I'm Hannah Obote,</h1>
              <h1>an aspiring fullstack developer </h1>
            </header>
            <h5 className='my-h-font-bold'>I'm a computer science student at Linnaeus University, and will be graduation 2024.</h5>

           
            <Link to='/comingsoon' className='btn btn-outline-dark my-p-font'>Check out my projects</Link>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Home
