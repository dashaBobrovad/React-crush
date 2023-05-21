import React from "react";
import { IProduct } from "../../../types/IProduct";
import s from "./ItemCounter.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import {
    addProductsToBasketAction,
    decreaseProductQtyFromBasketAction,
} from "../../../data/reducers/productsReducer";

interface ItemCounterProps {
    productItem: IProduct;
    ratingCount: number;
}

function ItemCounter({ productItem, ratingCount }: ItemCounterProps) {
    const dispatch = useTypedDispatch();

    const [isRemoveDisabled, setIsRemoveDisabled] = React.useState(true);
    const [isAddDisabled, setIsAddDisabled] = React.useState(true);

    const addProductToBasket = (
        e: React.MouseEvent<Element, MouseEvent>,
        productItem: IProduct
    ) => {
        // TODO: link?
        e.preventDefault();

        if (productItem.rating.count === 0) {
            return;
        }

        dispatch(addProductsToBasketAction(productItem));
    };

    const decreaseProductQtyFromBasket = (
        e: React.MouseEvent<Element, MouseEvent>,
        productItem: IProduct
    ) => {
        // TODO: link?
        e.preventDefault();
        if (productItem.qty === 1 || productItem.qty === undefined) {
            return;
        }

        dispatch(decreaseProductQtyFromBasketAction(productItem));
    };

    React.useEffect(() => {
        if (productItem.qty === 1 || productItem.qty === undefined) {
          setIsRemoveDisabled(true);
        } else {
          setIsRemoveDisabled(false);
        }
      }, [productItem.qty]);

      React.useEffect(() => {
        if (ratingCount === 0) {
            setIsAddDisabled(true);
        } else {
            setIsAddDisabled(false);
        }
      }, [ratingCount]);

      
    return <div className={s.counter}>
        <button
            type="button"
            className={`${s.btn} ${isRemoveDisabled ? "disabled" : ""}`}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                decreaseProductQtyFromBasket(e, productItem)
            }
        >
            -
        </button>
        <span>{productItem.qty || 1}</span>
        <button
            type="button"
            className={`${s.btn} ${isAddDisabled ? "disabled" : ""}`}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                addProductToBasket(e, productItem)
            }
        >
            +
        </button>
    </div>;
}

export default ItemCounter;
