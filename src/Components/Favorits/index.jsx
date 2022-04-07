import "./favorits.css";

const Favorirs = ({title, price, image}) => {
  return (
    <div className="favorits_card">
      <div className="favorits_card_unliked">
        <img src="/img/liked.svg" alt="unliked"></img>
      </div>
      <div className="favorits_card_img__wrapper">
        <img className="favorits_card__img" src={image} alt="img"></img>
        <p className="favorits_card_img__title">{title}</p>
      </div>

      <div className="favorits_card_title__wrapper">
        <div className="favorits_card_title__price">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
      </div>
    </div>
  );
};

export default Favorirs;
