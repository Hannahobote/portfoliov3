import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import icon from '../img/icon.png'
import MyCard from '../components/MyCard';

function Projects() {
  return (
    <div>

      <header className='my-h-font'>
        <h1>Projects </h1>
        <p>Lhsdndknkdnklnklanadksnklanklnsklsnkdks</p>
      </header>
      <Container>
        <Row>
          <Col>
            {/*Empty */}
          </Col>

          <Col md={3} className='my-3'>
            <MyCard
              img={icon}
              title='test'
              text='lorem ipsum'
              btn='test'
              variant='primary'
            />
          </Col>

          <Col md={3} className='my-3'>
            <MyCard
              img={icon}
              title='test'
              text='lorem ipsum'
              btn='test'
              variant='primary'
            />
          </Col>
          <Col>
            {/*Empty */}
          </Col>
        </Row>

        <Row>
          <Col>
            {/*Empty */}
          </Col>

          <Col md={3} className='my-3'>
            <MyCard
              img={icon}
              title='test'
              text='lorem ipsum'
              btn='test'
              variant='primary'
            />
          </Col>

          <Col md={3} className='my-3'>
            <MyCard
              img={icon}
              title='test'
              text='lorem ipsum'
              btn='test'
              variant='primary'
            />
          </Col>
          <Col>
            {/*Empty */}
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Projects
