import {Button, Card, Col, Row} from 'react-bootstrap'

export const CardComponent = ({ title, description, url, image }) => {
  return (
    <Col>
      <Card>
        {image ? <Card.Img variant="top" src={image} /> : ''}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {url ? <a href={url}><Button>Check it out!</Button></a> : ''}
        </Card.Body>
      </Card>
    </Col>
  )
}
