"use client";
import {useSelector} from 'react-redux';
import {selectBasket} from "@/stores/basket-store"

const Basket = () => {
const basket = useSelector(selectBasket)
    const totalAmount = basket.reduce((acc, product) => {
        return acc + product.price;
    }, 0)
    return (
        <div>
          Basket: {totalAmount.toFixed(2)}
        </div>
    );
};

export default Basket;
