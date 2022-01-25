import React from 'react'
import 'bulma/css/bulma.min.css'
import icon from '../img/icon.png'

function Home() {
  return (
    <div>
      <div class="columns is-centered ">
        <div class="column"></div>
        <div class="column">
        <img src={icon} alt='icon' style={{ width: '200px', height: '200px' }} className='image is-inline-block' />
        <h4>Hello I'm Hannah Obote,</h4>
        <h4>an aspiring Fullstack Developer </h4>

        <button class="button is-light mx-3" href='https://linkedin.com/in/hannah-obote-61110619a'>Linkedin</button>
        <button class="button is-light mx-3" href='https://github.com/Hannahobote'>Github</button>
        <button class="button is-light mx-3" href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'>email</button>


          <div class="content is-normal">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
          </div>
        </div>
        <div class="column is-primary"></div>
        </div>
    </div>
  )
}

export default Home
