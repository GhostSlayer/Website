import {Button, Card, Col} from 'react-bootstrap'

export const CardComponent = ({ title, description, url, image, github }) => {
  return (
    <Col>
      <Card>
        {image ? <Card.Img variant="top" src={image} /> : ''}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {url ? <a href={url}><Button style={{ marginRight: '5px' }}>Check it out!</Button></a> : ''}
          {github ? <a href={`https://github.com/${github}`}><Button variant="secondary">Source Code</Button></a> : ''}
        </Card.Body>
      </Card>
    </Col>
  )
}
