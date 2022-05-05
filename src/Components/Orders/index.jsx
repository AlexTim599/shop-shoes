import React from "react";
import {useSelector} from "react-redux";
import "./orders.css";

const Orders = () => {
  const order = useSelector((state) => state.arrShoes);
  const flatOrder = order.orders.flat();

  return flatOrder.length > 0 ? (
    <div className="orders_wrapper">
      {flatOrder.map((i) => {
        return (
          <div className="card" key={i.id}>
            <div className="card_img__wrapper">
              <img className="card_img" src={i.image} alt="img"></img>
              <p className="card_img__title">{i.title}</p>
            </div>
            <div className="card_title__wrapper">
              <div className="card_title__price">
                <span>Цена:</span>
                <b>{i.price}</b>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="ordersIsEmpty">
      <span>У Вас нет заказов</span>
    </div>
  );
};
export default Orders;
