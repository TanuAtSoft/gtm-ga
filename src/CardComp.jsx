import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp({details}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={details.image}/>
      <Card.Body>
        <Card.Title>{details.Title}</Card.Title>
        <Card.Text>
          {details.description}
        </Card.Text>
        <Button variant="primary" id="addToCart">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;