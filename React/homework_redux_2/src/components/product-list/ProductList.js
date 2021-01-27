import React from "react";
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const ProductList = ({products}) => {

    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}));
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(toggleItemInCart(product))
    }
    const addToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    return (
        <div className="products-list">
            {
                products.map((product) => (
                    <ProductItem
                        isAddedToCart={!!cart.find(el => el.id === product.id)}
                        isAddedToWishlist={!!wishlist.find(el => el.id === product.id)}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist}
                        key={product.id}
                        product={product} />
                ))
            }
        </div>
    )
}