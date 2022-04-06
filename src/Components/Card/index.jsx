import {useState} from "react";
import "./card.css";

const Card = ({title, price, image, onclickPlus, onClickFavorits, id}) => {
  const [isAdded, setAdded] = useState(false);
  const [isFavorit, setIsFavorit] = useState(false);

  const handleClick = () => {
    onclickPlus({title, price, image, id});
    setAdded(!isAdded);
  };

  const favoritHandleClick = () => {
    onClickFavorits({title, price, image, id});
    setIsFavorit(!isFavorit);
  };

  return (
    <div className="card">
      <div className="card_unliked" onClick={favoritHandleClick}>
        <img
          src={isFavorit ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="unliked"
        ></img>
      </div>

      <img className="card_img" src={image} alt="img"></img>
      <p>{title}</p>
      <div className="card_title__wrapper">
        <div className="card_title__price">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className="card_button" onClick={handleClick}>
          <img
            width={11}
            height={11}
            src={isAdded ? "./img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="img"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
