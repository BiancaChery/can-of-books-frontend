import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<BestBooks />} />

          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
