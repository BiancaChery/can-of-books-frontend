import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";

export default class Books extends Component {
  render() {
     let imgURL = "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
    return (
      <Carousel>
        {this.props.books.map((book, i) => (
          <Carousel.Item key={i}>
            {" "}
            <Image src={imgURL} alt="Book image" />{" "}
            <Carousel.Caption>
               <h3>{book.title}</h3>
               <p>Description: {book.description}</p>
               <p>Status: {book.status}</p>

            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
