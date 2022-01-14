import React from 'react'
import icon from '../img/icon.png'
import { Row, Col} from 'antd';


function Home() {
  return (
    <div>

    
<Row gutter={[8, 24]}>
          <Col span={8} />
          <Col span={8} />
          <Col span={8} />

          <Col span={8} />
          <Col span={8} />
          <Col span={8} />
        </Row>
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
              <h4>an aspiring Fullstack Developer </h4>
            </div>

            <div 
            className='my-3'>

            <a href='https://linkedin.com/in/hannah-obote-61110619a' target='_blank' rel='noreferrer' className='btn btn-primary my-p-font mx-2'>LinkedIn</a>
            <a href='https://github.com/Hannahobote'  target='_blank' rel='noreferrer'  className='btn btn-primary my-p-font mx-2'>GitHub</a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'  target='_blank' rel='noreferrer'  className='btn btn-primary my-p-font mx-2'>Gmail</a>

            </div>
 
    </div>
  )
}

export default Home
