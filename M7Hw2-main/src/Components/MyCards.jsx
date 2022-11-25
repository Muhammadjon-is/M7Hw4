import React from 'react';
import { Component } from 'react';
import {Button, Card }  from "react-bootstrap"
 import Romance  from "./books/romance.json"
class MyCards extends Component {
  render(){

  
     return (
    <div className='row '>
        {Romance.map((book => (

<Card className='bookCards  row-cols-auto' key={book.asin}   >
<Card.Img variant="top" src={book.img} />
 
<Card.Body>
  
  <Card.Title><h4>{book.title}</h4></Card.Title>
  <Card.Text>
     <h5>{"Category: " + book.category}</h5> 
  </Card.Text>
  <Button className='btn '>{book.price + "$"}</Button>
</Card.Body>
</Card>

        )))}

    </div>  
  )
}
}

export default MyCards