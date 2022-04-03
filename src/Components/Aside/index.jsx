import { useSelector, useDispatch } from "react-redux";
import { closeAside, removeShoes } from "../../features/shoes/shoesSlice";


import "./aside.css";

const Aside = () => {
  const asideIsOpen = useSelector((state) => state.arrShoes);
  const aside = useSelector((state) => state.arrShoes.cardAside);
  console.log(aside);

  const dispatch = useDispatch();

  return asideIsOpen.aside ? (
    <div className="aside_panel">
      <div className="basket">
        <h3 className="basket_title">
          Корзина
          <img
            onClick={() => dispatch(closeAside())}
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="close"
          ></img>
        </h3>

        <div className="basket_item">
          {aside.map((i) => {
            console.log('корзина', i);
            return (
            <div className="basket_item-_wrapper"key={i.id} >
              <img
                width={70}
                height={70}
                src={i.image}
                alt="img"
              ></img>
              <div className="basket_item__title">
                <span >{i.title} </span>
                <b >{i.price} руб.</b>
              </div>
              <img onClick={()=>dispatch(removeShoes(i.id))}
                className="basket_item__button"
                src ="/img/btn-remove.svg "
                alt="remove"
              ></img>
            </div>
            )
})}
        </div>
     
        <div className="price_wrapper">
          <div>
            <span>Цена:</span>
          </div>
          <div className="price_wrapper___dashed"></div>
          <div>
            <span>12 456 руб.</span>
          </div>
        </div>
        <button className="btn_blue">
          Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>
        </button>
      </div>
    </div>
  ) : null;
};

export default Aside;
