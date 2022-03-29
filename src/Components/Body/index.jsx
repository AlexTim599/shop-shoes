import "./body.css";

const Body = () => {
  return (
    <div className="body_shop">
      <h2 className=" body_title">Все кроссовки</h2>
      <div className="body_search__block">
        <img
          className="body_searh__img"
          src="/img/search.svg"
          alt="Search"
        ></img>
        <input className="body_searh__input" placeholder="Search"></input>
      </div>
    </div>
  );
};

export default Body;
