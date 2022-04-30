import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { openAside, openFavorits } from "../../features/shoes/shoesSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const shoesPrice = useSelector((state) => state.arrShoes.cardAside)
  const dispatch = useDispatch();

  const totalPrice = shoesPrice.reduce((sum, price) => price.price + sum, 0)

  return (
    <>
      <header>
        <Link to='/'>
          <div className="header_left">
            <img className="logo" src="/img/logo.png " alt="img"></img>
            <div className=" header_info">
              <h3> Shop house</h3>
              <p>Магазин кросовок</p>
            </div>
          </div>
        </Link>
        <ul className="header_right">
          <li onClick={() => dispatch(openAside())}>
            <img className="header_logo" src="/img/cart.svg" alt="img"></img>
            <span>{totalPrice} руб</span>
          </li>
          <Link to='/favorits'>
            <li onClick={() => dispatch(openFavorits())}>
              <img className="liked_logo" src="/img/heart.svg" alt="liked"></img>
            </li>
          </Link>
          <li>
            <img className="header_logo" src="/img/user.svg" alt="user"></img>
          </li>
        </ul>
      </header>

    </>

  );
};

export default Header;
