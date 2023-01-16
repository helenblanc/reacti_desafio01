import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = ({ images }) => {
  console.log('create cards')
  /*SE GENERA UNA NUEVA LISTA CON LOS CARDS POR IMAGENES. SE USA COMPONENTE ROW + COL SEGUN DOCUMENTACION DE REACT JS 
  https://react-bootstrap.github.io/components/cards/ */
  const cards = images.map((img) => (
    <Col>
      <Card style={{ textAlign: "center", alignItems: "center", justifyContent: "center", marginTop: '20px',  marginBottom: '20px' }} >
        <Card.Img variant="top" src={"/assets/img/" + img.src} />
        <Card.Body >
          <Card.Title>{img.title}</Card.Title>
          <Card.Text>
            {img.detail}
          </Card.Text>
          <Button variant="outline-primary">View</Button>{' '}     
        </Card.Body>
      </Card>
    </Col>
  ));
  console.log('cards', cards)
  return (<Row xs={1} md={3} className="g-4">{cards}</Row>);
};

export default Cards;