import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../img/icon.png'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
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
            <div className='my-primary-font-color'>
              <h4>Hello I'm Hannah Obote,</h4>
              <h4>an aspiring fullstack developer </h4>
            </div>
            <Link to='/comingsoon' className='btn btn-outline-light my-p-font mt-3'>Check out my projects</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
