import React from "react";
import {useDispatch} from "react-redux";
import {closeAside} from "../../features/shoes/shoesSlice";
const Info = ({img, title}) => {
  const dispatch = useDispatch();
  return (
    <div className="bascet_item__empty">
      <img className="bascet_item_empty__img" src={img} alt="cart" />
      <span>{title}</span>
      <button
        className="bascet_item_empty__btn"
        onClick={() => dispatch(closeAside())}
      >
        Назад
      </button>
    </div>
  );
};

export default Info;
