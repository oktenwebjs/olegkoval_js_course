import {TOGGLE_ITEM_IN_CART} from "../action-types";

export const toggleItemInCart = (product) => (dispatch) => {
   dispatch({type: TOGGLE_ITEM_IN_CART, payload: product});
};