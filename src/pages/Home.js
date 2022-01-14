import React from 'react'
import icon from '../img/icon.png'
import { Row, Col, Button, Space} from 'antd';


function Home() {
  return (
    <div>      
  <Row gutter={[8, 24]} align='middle'>
    <Col Col span={8} md={24}> {/*empty col */}</Col>
    <Col Col span={8} md={24}> 
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
        <h4>an aspiring Fullstack Developer </h4>
 
      <Space size={'small'}>
      <Button size='small' target={'_blank'} href='https://linkedin.com/in/hannah-obote-61110619a'>Linkedin</Button>
      <Button size='small' target={'_blank'} href='https://github.com/Hannahobote'>Git Hub</Button>
      <Button size='small' target={'_blank'} href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'>Gmail</Button>
      </Space>

    </Col>
    <Col Col span={8} md={24}>{/*empty col */}</Col>
  </Row>

    </div>
  )
}

export default Home
