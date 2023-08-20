import axios from 'axios';
import React from 'react';

const URL = process.env.REACT_APP_URL || "http://localhost:3001";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount(){
   const getBooks = async() => {
    const bookData = await axios.get(`${URL}/books`);
   console.log(bookData);
   this.setState({books: bookData.data});
   }
   getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
