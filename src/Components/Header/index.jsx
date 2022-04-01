import "./header.css";
import { useDispatch } from "react-redux";
import { openAside } from "../../features/shoes/shoesSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className="header_left">
        <img className="logo" src="/img/logo.png " alt="img"></img>
        <div className=" header_info">
          <h3> Shop house</h3>
          <p>Магазин кросовок</p>
        </div>
      </div>
      <ul className=" header_right">
        <li onClick={() => dispatch(openAside())}>
          <img className="header_logo" src="/img/cart.svg" alt="img"></img>
          <span>1300 руб</span>
        </li>
        <li>
          <img className="header_logo" src="/img/user.svg" alt="img"></img>
        </li>
      </ul>
    </header>
  );
};

export default Header;
