import axios from "axios"
import { formatMoney } from "../../utils/money"
import { DeliveryOptions } from "./DeliveryOptions"
import { useState } from "react";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {

    const [quantity, setQuantity] = useState(cartItem.Quantity);

    function newQuantity(event) {
        const value = event.target.value
        if (value === '' || /^[0-9\b]+$/.test(value)) {setQuantity(event.target.value)};
    }

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await loadCart();
    }

    const updateCartItem = async () => {
        const numericQuantity = Number(quantity);
        if (!quantity || numericQuantity <= 0) {
            console.warn("Invalid quantity");
            return; // Stops the function completely
        }

        try {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: numericQuantity
            });
            setQuantity('');
            await loadCart();
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    }

    return (
        <>
            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={quantity}
                            onChange={newQuantity}
                            className="quantity-input" />
                        <span>
                            Quantity: {cartItem.quantity}
                            <span
                                className="quantity-label"></span>
                        </span>
                        <span
                            className="update-quantity-link link-primary"
                            onClick={updateCartItem}
                            style={{ cursor: 'pointer' }} >
                            Update
                        </span>
                        <span
                            className="delete-quantity-link link-primary"
                            onClick={deleteCartItem}
                            style={{ cursor: 'pointer' }} >
                            Delete
                        </span>
                    </div>
                </div>

                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
            </div>
        </>
    )
}