import {useDispatch, useSelector} from "react-redux";
import {searhSoes} from "../../features/shoes/shoesSlice";

import "./body.css";

const Body = () => {
  const {shoes, searchValue} = useSelector((state) => state.arrShoes);
  const dispatch = useDispatch();

  const title =
    searchValue.length > 0 ? `Поиск по: ${searchValue}` : "Кроссовки";

  const clickSearsh = (e) => {
    const filtredShoes = shoes.filter((i) =>
      i.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(searhSoes({filtredShoes, searchValue: e.target.value}));
  };

  return (
    <div className="body_shop">
      <h2 className=" body_title"> {title}</h2>
      <div className="body_search__block">
        <img
          className="body_searh__img"
          src="/img/search.svg"
          alt="Search"
        ></img>
        <input
          onChange={clickSearsh}
          className="body_searh__input"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default Body;
