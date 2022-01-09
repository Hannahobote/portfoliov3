import React from 'react'
import {Card, Button } from 'react-bootstrap';

function MyCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant={props.vriant}>{props.text}</Button>
        </Card.Body>
      </Card>
      {/*add link to git repo later */}
    </div>
  )
}

export default MyCard
