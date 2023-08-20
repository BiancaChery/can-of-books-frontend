import axios from "axios";
import React from "react";

import Books from "./Books";

const URL = process.env.REACT_APP_URL || "http://localhost:3001";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const getBooks = async () => {
      try {
        const bookData = await axios.get(`${URL}/books`);
        console.log(bookData);
        this.setState({ books: bookData.data });
      } catch (error) {
        console.error("Error getting books", error);
      }
    };
    getBooks();
  }
  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
         <Books books={this.state.books} />
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
