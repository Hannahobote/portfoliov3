import React from 'react'
import icon from '../img/icon.png'

function Home() {
  return (
    <div> 
      <Content style={{ marginTop: '10px'}}>
        <img src={icon} alt='icon' style={{ width: '200px', height: '200px'}}/>
        <h4>Hello I'm Hannah Obote,</h4>
        <h4>an aspiring Fullstack Developer </h4>
 
      <Space size={'small'}>
      <Button size='small' target={'_blank'} href='https://linkedin.com/in/hannah-obote-61110619a'>Linkedin</Button>
      <Button size='small' target={'_blank'} href='https://github.com/Hannahobote'>Git Hub</Button>
      <Button size='small' target={'_blank'} href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'>Gmail</Button>
      </Space>
      
      </Content> 
    </div>
  )
}

export default Home
