import React from 'react'
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

            <div 
            className='my-3'>

            <a href='https://linkedin.com/in/hannah-obote-61110619a' target='_blank' rel='noreferrer' className='btn btn-primary my-p-font mx-2'>LinkedIn</a>
            <a href='https://github.com/Hannahobote'  target='_blank' rel='noreferrer'  className='btn btn-primary my-p-font mx-2'>GitHub</a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'  target='_blank' rel='noreferrer'  className='btn btn-primary my-p-font mx-2'>Gmail</a>

            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Home
