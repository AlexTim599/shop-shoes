import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import Card from "./Components/Card";
import Header from "./Components/Header";


function App() {

  const arr = useSelector((state) => state.arrShoes.shoes)

  const [aside, setAside] = useState(false)

  // const res = axios('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(res.data);

  return (
    <div className="wrapper">
      {aside && <Aside onClose={() => setAside(false)} />}
      <Header openClickAside={() => setAside(true)} />
      <div className="body_shop_wrapper">
        <Body />
        <div className="shoes">
          {arr.map((i, index) => (
            <Card
              title={i.title}
              price={i.price}
              image={i.image}
              key={index}
              onClickFavorite={() => console.log("fdd favotire")}
              onclickPlus={() => console.log('нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
