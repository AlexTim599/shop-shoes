import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from ".";
import {addAside, addFavorits} from "../../features/shoes/shoesSlice";

const CardContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  console.log(shoes.favorits);

  const dispatch = useDispatch();

  return shoes.searchResult.length > 0
    ? shoes.searchResult.map((shoes) => (
        <Card
          title={shoes.title}
          price={shoes.price}
          image={shoes.image}
          id={shoes.id}
          key={shoes.id}
          onclickPlus={(obj) => dispatch(addAside(obj))}
          onClickFavorits={(obj) => dispatch(addFavorits(obj))}
        />
      ))
    : shoes.shoes.map((shoes) => (
        <Card
          title={shoes.title}
          price={shoes.price}
          image={shoes.image}
          id={shoes.id}
          key={shoes.id}
          onclickPlus={(obj) => dispatch(addAside(obj))}
          onClickFavorits={(obj) => dispatch(addFavorits(obj))}
        />
      ));
};

export default CardContainer;
