import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Faforits from ".";
import {removeFavoritsShoes} from "../../features/shoes/shoesSlice";

const FavoritsContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  const favorits = useSelector((state) => state.arrShoes.favorits);
  const dispatch = useDispatch();

  return favorits.length ? (
    shoes.favorits.map((shoes) => (
      <Faforits
        title={shoes.title}
        price={shoes.price}
        image={shoes.image}
        id={shoes.id}
        key={shoes.id}
        favoritsRemove={(obj) => dispatch(removeFavoritsShoes(shoes.id))}
      />
    ))
  ) : (
    <div className="favorits_isEmty">
      <span>"Добавьте любимые кроссовки" </span>
    </div>
  );
};

export default FavoritsContainer;
