// import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Singlecard=({photo,title,desc}) =>{
   
  return (

 <>
  
<Col className='g-5'  sm={6} md={4}>

<Card  >
      <Card.Img height={300} variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {desc}
        </Card.Text>
        <Button   variant="primary">read more</Button>
        <Button className='ms-3'>Details</Button>
      </Card.Body>
    </Card>

</Col>
 
 
 </>
  );
}

export default Singlecard;