import React, { use } from "react";
import './checkout.styles.scss'; // Assuming you have a styles file for checkout
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const {cartItems,cartTotal} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.length ? (
                    cartItems.map((item) => {
                        return (
                            <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
                        )
                    })
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
                <span className="total">{`$${cartTotal}`}</span>
            </div>
        
    );
}

export default Checkout;
