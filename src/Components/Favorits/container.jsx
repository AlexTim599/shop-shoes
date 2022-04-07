import React from "react";
import {useSelector} from "react-redux";
import Faforits from ".";

const FavoritsContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  const favoritsIsOpen = useSelector((state) => state.arrShoes.favoritsIsOpen);
  console.log(shoes.favorits);

  return favoritsIsOpen
    ? shoes.favorits.map((shoes) => (
        <Faforits title={shoes.title} price={shoes.price} image={shoes.image} />
      ))
    : null;
};

export default FavoritsContainer;
