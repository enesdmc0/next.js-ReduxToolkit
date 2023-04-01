'use client';
import {useDispatch} from 'react-redux';
import {actions as basketActions} from '@/stores/basket-store';

const AddBasketButton = ({product}) => {
    const dispatch = useDispatch();
    const handleAddBasket = () => {
        dispatch(basketActions.addToBasket(product))
    };
    return (
        <button onClick={handleAddBasket}>
            Add to basket
        </button>
    );
};

export default AddBasketButton;
