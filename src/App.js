// import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import CardContainer from "./Components/Card/contaner";
import FavoritsContainer from "./Components/Favorits/container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <div className="body_shop_wrapper">
          <Body />
          <div className="shoes">
            <CardContainer />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
