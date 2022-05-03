// import axios from "axios";
import React from "react";
import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import CardContainer from "./Components/Card/contaner";
import FavoritsContainer from "./Components/Favorits/container";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages";
import Orders from "./Components/Orders";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <div className="body_shop_wrapper">
                  <Body />
                  <div className="shoes">
                    <CardContainer />
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="favorits"
              element={
                <div className="favorits_container">
                  <div className="favorits_container__title">
                    <h2>Избранное</h2>
                  </div>
                  <FavoritsContainer />
                </div>
              }
            ></Route>
            <Route
              path="orders"
              element={
                <div className="orders_container">
                  <div className="orders_container__title">
                    <h2>Мои заказы</h2>
                  </div>
                  <Orders />
                </div>
              }
            ></Route>
          </Route>
        </Routes>
        <Aside />
      </div>
    </>
  );
}

export default App;
