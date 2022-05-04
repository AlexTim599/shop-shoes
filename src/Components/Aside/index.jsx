import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrders, closeAside, removeShoes } from "../../features/shoes/shoesSlice";
import Info from "../Info";

import "./aside.css";

const Aside = () => {
  const asideIsOpen = useSelector((state) => state.arrShoes);
  const aside = useSelector((state) => state.arrShoes.cardAside);
  const [isOrderCompited, setIsOrderCompited] = useState(false)
  console.log(asideIsOpen.orders);

  const price = aside.reduce((sum, price) => price.price + sum, 0)

  const dispatch = useDispatch();

  const payOrders = () => {
    aside.map((i) => dispatch(removeShoes(i.id)))
    function go() {
      dispatch(addOrders(aside))
    }
    setIsOrderCompited(true)
    go()
  }

  return asideIsOpen.asidePanel ? (
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

        {aside.length > 0 ? (
          <div>
            <div className="basket_item">
              {aside.map((i) => {
                return (
                  <div className="basket_item-_wrapper" key={i.id}>
                    <img width={70} height={70} src={i.image} alt="img"></img>
                    <div className="basket_item__title">
                      <span>{i.title} </span>
                      <b>{i.price} руб.</b>
                    </div>
                    <img
                      onClick={() => dispatch(removeShoes(i.id))}
                      className="basket_item__button"
                      src="/img/btn-remove.svg "
                      alt="remove"
                    ></img>
                  </div>
                );
              })}
            </div>
            <div className="price_wrapper">
              <div>
                <span>Цена:</span>
              </div>
              <div className="price_wrapper___dashed"></div>
              <div>
                <span>{price} руб.</span>
              </div>
            </div>
            <button className="btn_blue" onClick={payOrders}>
              Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>
            </button>
          </div>
        ) : (
          <Info
            title={isOrderCompited ? 'Ваш заказ оформлен и скоро будет у Вас!' : 'Ваша корзина пуста'}
            img={isOrderCompited ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'} />
        )}
      </div>
    </div >
  ) : null;
};

export default Aside;
