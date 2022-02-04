import React from 'react'
// import 'bulma/css/bulma.min.css'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <div class="columns is-centered ">

        <div class="column">
          {/*empty */}
        </div>

        <div class="column">
          <div class="content is-normal my-4">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
            <h2>Current stack</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
          </div>
        </div>

        <div class="column is-primary">
          {/*empty */}
        </div>
        
      </div>
    </div>
  )
}

export default Home
