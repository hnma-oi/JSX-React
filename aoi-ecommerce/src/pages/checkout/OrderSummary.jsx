import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary( { cart, deliveryOptions}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOptions = deliveryOptions.find((deliveryOption) => {
                    return (
                        deliveryOption.id === cartItem.deliveryOptionId
                    );
                })

                return (
                    <div key={cartItem.productId}
                        className="cart-item-container">
                        <DeliveryDate selectedDeliveryOptions={selectedDeliveryOptions}/>

                        <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions}/>
                    </div>
                )
            })}
        </div>
    )
}