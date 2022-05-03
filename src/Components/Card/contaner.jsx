import { useDispatch, useSelector } from "react-redux";
import Card from ".";
import { addAside, addFavorits, removeFavoritsShoes, removeShoes } from "../../features/shoes/shoesSlice";

const CardContainer = () => {
  const shoes = useSelector((state) => state.arrShoes);
  const shoppingСart = useSelector((store) => store.arrShoes.cardAside)
  const favorits = useSelector((store) => store.arrShoes.favorits)
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
        onclickMinus={() => dispatch(removeShoes(shoes.id))}
        onClickFavorits={(obj) => dispatch(addFavorits(obj))}
        shoppingСart={shoppingСart}
        favorits={favorits}
        favoritsRemove={() => dispatch(removeFavoritsShoes(shoes.id))}



      />
    ));
};

export default CardContainer;
