import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"
import { useSelector } from "react-redux";
import "./card.css";

const Card = ({ title, price, image, id, onclickPlus, onClickFavorits, removeDouble, }) => {
  const [isAdded, setAdded] = useState(false);
  const [isFavorit, setIsFavorit] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  // const added = useSelector((store) => store.arrShoes.cardAside)
  // console.log(added);



  const handleClick = () => {
    removeDouble()
    onclickPlus({ title, price, image, id });
    setAdded(!isAdded)
  };

  const favoritHandleClick = () => {
    onClickFavorits({ title, price, image, id });
    setIsFavorit(!isFavorit);
  };

  useEffect(() => {
    setTimeout(() => { setIsLoading(true) }, 1000)
  }, [])

  return isLoading ? (

    <div className="card">
      <div className="card_unliked" onClick={favoritHandleClick} >
        <img
          src={isFavorit ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="unliked"
        ></img>
      </div>
      <div className="card_img__wrapper">
        <img className="card_img" src={image} alt="img"></img>
        <p className="card_img__title">{title}</p>
      </div>

      <div className="card_title__wrapper">
        <div className="card_title__price">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className="card_button" onClick={handleClick}>
          <img className="card_button__img "
            src={isAdded ? "./img/btn-checked.svg" : '/img/btn-plus.svg'}
            alt="img"
          ></img>
        </button>
      </div>
    </div >

  ) :
    <div> <ContentLoader

      speed={5}
      width={220}
      height={240}
      viewBox="0 0 220 240"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"

    >
      <rect x="1" y="236" rx="8" ry="8" width="60" height="15" />
      <rect x="91" y="165" rx="8" ry="8" width="29" height="31" />
      <rect x="229" y="21" rx="5" ry="5" width="180" height="220" />
      <rect x="0" y="4" rx="8" ry="8" width="120" height="145" />
      <rect x="0" y="166" rx="8" ry="8" width="74" height="15" />
      <rect x="0" y="199" rx="8" ry="8" width="42" height="15" />
    </ContentLoader>  </div>
};

export default Card;
