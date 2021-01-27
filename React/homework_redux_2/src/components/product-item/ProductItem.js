import React from "react";

export const ProductItem = ({product, addToCart, addToWishlist, isAddedToCart, isAddedToWishlist}) => {

    const {id, title, price, description} = product;

    return (
        <div key={id} className="product-item">
            <h4>{title}</h4>
            <div className="product-price">Price: ${price.toFixed(2)}</div>
            <div className="product-description">{description}</div>
            <button
                className={isAddedToCart ? 'remove-from-cart' : 'add-to-cart'}
                onClick={() => addToCart(product)}>
                {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            <button
                className={isAddedToWishlist ? 'remove-from-wishlist' : 'add-to-wishlist'}
                onClick={() => addToWishlist(product)}>
                {isAddedToWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    )
}