import React from "react";
import Container1 from "./component/Container1";
import Container2 from "./component/Container2";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Social from "./component/Social";
import About from "./component/About";
import Endoresments from "./component/Endoresments";
import Results from "./component/Results";
import WorkedFor from "./component/WorkedFor";

import "./App.css";

function App() {
  return (
    <>
      <Container1>
        <Nav />
        <Hero />
      </Container1>
      <Container2>
        <Social />
      </Container2>
      <Container1>
        <About />
      </Container1>
      <Container2>
        <Endoresments />
      </Container2>
      <Container1>
        <Results />
      </Container1>
      <Container2>
        <WorkedFor />
      </Container2>
    </>
  );
}

export default App;
