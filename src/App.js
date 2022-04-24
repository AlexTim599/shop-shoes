// import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import CardContainer from "./Components/Card/contaner";
import FavoritsContainer from "./Components/Favorits/container";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages";


function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<div className="body_shop_wrapper">
              <Body />
              <div className="shoes">
                <CardContainer />
              </div>
            </div>}></Route>
            <Route path="favorits" element={<FavoritsContainer />}></Route>
          </Route>
        </Routes>
        <Aside />
      </div>
    </>
  );
}

export default App;
