import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from ".";
import { addAside } from "../../features/shoes/shoesSlice";


const CardContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  console.log(shoes.searchResult);
  const dispatch = useDispatch()

   return shoes.searchResult.length > 0 ? shoes.searchResult.map((shoes) => (
     
    <Card
      title={shoes.title}
      price={shoes.price}
      image={shoes.image}
      id ={shoes.id}
      key={shoes.id}
      onClickFavorite={() => console.log("add favotire")}
      onclickPlus={(obj) => dispatch(addAside(obj))}
    />
   )) : shoes.shoes.map((shoes) => (
     <Card
       title={shoes.title}
       price={shoes.price}
       image={shoes.image}
       id={shoes.id}
       key={shoes.id}
       onClickFavorite={() => console.log("add favotire")}
       onclickPlus={(obj) => dispatch(addAside(obj))}
     />
   ));
};

export default CardContainer;

<div>
  <span>
    <ul>
      <li></li>
    </ul>
  </span>
</div>