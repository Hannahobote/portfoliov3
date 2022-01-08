import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../img/icon.png'

function Home() {
  return (
    <div>
      <div className='container-md'>
        <div className='row'>

          <section className='intro col mx-3 my-3 text-center' id="row1-col1">
            <header className='my-h-font'>
            <img 
              src={icon}
              alt='icon'
              className='img-fluid img-responsive my-2'
              style={{
                width: '200px',
                height: '200px'
              }}
            >
            </img>
              <h4>Hello I'm Hannah Obote,</h4>
              <h4>an aspiring fullstack developer </h4>
            </header>
            <Link to='/comingsoon' className='btn btn-outline-dark my-p-font mt-3'>Check out my projects</Link>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Home
