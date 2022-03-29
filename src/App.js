import "./App.css";
import Aside from "./Components/Aside";
import Body from "./Components/Body";
import Card from "./Components/Card";
import Header from "./Components/Header";

const arr = [
  {
    title: "Кроссовки Air Max Dawn",
    price: 12999,
    image: "./img/shoes/1.jpg",
  },
  {
    title: "Кроссовки Air Max Dawn",
    price: 12999,
    image: "./img/shoes/2.jpg",
  },
  {
    title: "Кроссовки Air Max Dawn",
    price: 12999,
    image: "./img/shoes/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Aside />
      <Header />
      <div className="body_shop_wrapper">
        <Body />
        <div className="shoes">
          {arr.map((i, index) => (
            <Card
              title={i.title}
              price={i.price}
              image={i.image}
              key={index}
              onClickFavorite={() => console.log("fdd favotire")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
