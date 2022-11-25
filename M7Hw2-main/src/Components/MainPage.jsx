import React from 'react'
import { Component } from 'react'
import {Carousel, Container} from "react-bootstrap"
import romanceMovie from "./books/romance.json"


class MainPage extends Component  {
  render() {  
    return (
        <div className='carusel'>
        <Container>
    <Carousel>
        {romanceMovie.map((books) => (

      
    <Carousel.Item key={romanceMovie.id}>
      <img
        className="d-block w-100"
        src={books.img}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className='bg-dark'>
        <h3>{books.title}</h3>
        <p>{books.category}</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
   
    
   ))}
  </Carousel>
  </Container>
  </div>
  )

}
}

export default MainPage