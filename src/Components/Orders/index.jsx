import React from "react"
import { useSelector } from "react-redux";


const Orders = () => {
    const order = useSelector((state) => state.arrShoes);
    const flatOrder = order.orders.flat()

    return (
        <div className="favorits_card">
            {flatOrder.map((i) => {
                return (
                    <div>
                        <div className="" key={i.id}>
                            <img className="favorits_card__img" src={i.image} alt="img"></img>
                            <p className="favorits_card_img__title">{i.title}</p>
                        </div>
                        <div className="favorits_card_title__wrapper">
                            <div className="favorits_card_title__price">
                                <span>Цена:</span>
                                <b>{i.price}</b>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>

    )
}
export default Orders