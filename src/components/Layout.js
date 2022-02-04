import React from 'react'
import { Row, Col} from 'antd';

export default function MyLayout(props) {
  const {component} = props
  //make it responsive! 
  return (
    <Row gutter={[8, 24]} align='middle' breakpoint="md">
    <Col Col span={8} md={24}> {/*empty col */}</Col>
    <Col Col span={8} md={24}> 
      {component}
    </Col>
    <Col Col span={8} md={24}>{/*empty col */}</Col>
  </Row>
  )
}
