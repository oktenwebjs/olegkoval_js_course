import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

export const toggleItemInWishlist = (product) => (dispatch) => {
   dispatch({type: TOGGLE_ITEM_IN_WISHLIST, payload: product});
};