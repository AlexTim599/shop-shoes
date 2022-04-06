// import axios from "axios";
import React from "react";
import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import CardContainer from "./Components/Card/contaner";
import Favorits from "./Components/Favorits";
import Header from "./Components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <div className="body_shop_wrapper">
        <Body />
        <Favorits />
        <div className="shoes">
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
