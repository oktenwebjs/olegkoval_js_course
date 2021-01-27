import React, {useMemo} from "react";
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}));

    const wishlistTotal = useMemo(() => {
        return wishlist.reduce((acc, el) => acc += el.price, 0)
    }, [wishlist]);

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, el) => acc += el.price, 0)
    }, [cart]);

    return (
        <header className='d-flex justify-between'>
            <h2>The best store in the world!</h2>

            <div className='d-flex justify-between align-center'>
                <div className='margin-lr-10' title={'Wishlist Total is $' + wishlistTotal.toFixed(2)}>Wishlist: {wishlist.length}</div>
                <div className='margin-lr-10' title={'Cart Total is $' + cartTotal.toFixed(2)}>Cart: {cart.length}</div>
            </div>
        </header>
    )
}