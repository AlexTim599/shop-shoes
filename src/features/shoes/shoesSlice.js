import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoes: [
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
            image: "./img/shoes/4.jpg",
        },
        {
            title: "Кроссовки Air Max Dawn",
            price: 12999,
            image: "./img/shoes/5.jpg",
        },
        {
            title: "Кроссовки Air Max Dawn",
            price: 12999,
            image: "./img/shoes/6.jpg",
        },
        {
            title: "Кроссовки Air Max Dawn",
            price: 12999,
            image: "./img/shoes/7.jpg",
        },
        {
            title: "Кроссовки Air Max Dawn",
            price: 12999,
            image: "./img/shoes/8.jpg",
        },

    ],
    cardAside: [],
    clickPlus: false


}

const shoesSlice = createSlice({
    name: 'arrShoes',
    initialState,
    reducers: {
        setShoes: (state, action) => {
            return {
                ...state,
                shoes: action.payload
            }

        },
        addAside: (state, action) => {
            return {
                ...state,
                cardAside: action.payload
            }

        }
    }


})




export const { setShoes, addAside } = shoesSlice.actions;
export default shoesSlice.reducer