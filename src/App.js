import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import { Link } from "react-router-dom";
import Books from "./Books";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<BestBooks />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Form>
            <h2>Book List</h2>
            <ul>
              {Books.map((book) => (
                <li key={book.id}>
                  {book.title} is {book.status}
                  <Link to={'/edit/${book.id}'}>Edit</Link>
                </li>
              ))}
            </ul>
          </Form>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
