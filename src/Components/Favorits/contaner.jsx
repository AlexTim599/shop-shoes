import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorits from ".";

const CardContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  console.log(shoes.favorits);

  return shoes.favorits.map((shoes) => (
    <Favorits
      title={shoes.title}
      price={shoes.price}
      image={shoes.image}
      id={shoes.id}
      key={shoes.id}
    />
  ));
};

export default CardContainer;
