import React from "react";
import { useSelector } from "react-redux";
import Card from ".";

const CardContainer = () => {
  const shoes = useSelector((state) => state.arrShoes.shoes);
  return shoes.map((i, index) => (
    <Card
      title={i.title}
      price={i.price}
      image={i.image}
      key={index}
      onClickFavorite={() => console.log("fdd favotire")}
      onclickPlus={() => console.log("нажали плюс")}
    />
  ));
};

export default CardContainer;
