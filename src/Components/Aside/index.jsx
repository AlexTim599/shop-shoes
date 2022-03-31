import { useSelector } from "react-redux";
import "./aside.css";

const Aside = ({onClose}) => {

  const aside = useSelector((state)=> state.arrShoes.cardAside)
  
  return (
    <div className="aside_panel">
      <div className="basket">
        <h3 className="basket_title">
          Корзина
          <img onClick={onClose}
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="close"
          ></img>
        </h3>

        <div className="basket_item">
          {aside.map((i)=> <>  <img width={70} height={70} src="/img/shoes/1.jpg" alt="img"></img>
          <div className="basket_item__title">
            <span>Кроссовки adidas CORERACER </span>
            <b>11 290 руб.</b>
          </div>
          <img
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="remove"
          ></img></> )}


                  {/* <img width={70} height={70} src="/img/shoes/1.jpg" alt="img"></img>
          <div className="basket_item__title">
            <span>Кроссовки adidas CORERACER </span>
            <b>11 290 руб.</b>
          </div>
          <img
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="remove"
          ></img> */}
          
        </div>

        {/* <div className="basket_item">
          <img width={70} height={70} src="/img/shoes/2.jpg" alt="img"></img>
          <div className="basket_item__title">
            <span>Кроссовки adidas CORERACER </span>
            <b>11 290 руб.</b>
          </div>
          <img
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="remove"
          ></img>
        </div>
        <div className="basket_item">
          <img width={70} height={70} src="/img/shoes/2.jpg" alt="img"></img>
          <div className="basket_item__title">
            <span>Кроссовки adidas CORERACER </span>
            <b>11 290 руб.</b>
          </div>
          <img
            className="basket_item__button"
            src="/img/btn-remove.svg"
            alt="remove"
          ></img>
        </div> */}

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
  );
};

export default Aside;
