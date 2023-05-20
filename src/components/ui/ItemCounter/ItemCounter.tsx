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
}

function ItemCounter({ productItem }: ItemCounterProps) {
    const dispatch = useTypedDispatch();

    const [isRemoveDisabled, setIsRemoveDisabled] = React.useState(true);

    const addProductToBasket = (
        e: React.MouseEvent<Element, MouseEvent>,
        productItem: IProduct
    ) => {
        // TODO: link?
        e.preventDefault();
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

      
    return <div className={s.counter}>
        <button
            type="button"
            className={`${s.remove} ${isRemoveDisabled ? "disabled" : ""}`}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                decreaseProductQtyFromBasket(e, productItem)
            }
        >
            -
        </button>
        <span>{productItem.qty || 1}</span>
        <button
            type="button"
            className={s.remove}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                addProductToBasket(e, productItem)
            }
        >
            +
        </button>
    </div>;
}

export default ItemCounter;
