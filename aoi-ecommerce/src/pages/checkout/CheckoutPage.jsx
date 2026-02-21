import axios from 'axios';
import { CheckoutHeader } from './CheckoutHeader';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';
import './checkout.css';


export function CheckoutPage({ cart }) {
    const [deliveryOptions, setdeliveryOptions] = useState([]);
    const [paymentSummary, setpaymentSummary] = useState(null)

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setdeliveryOptions(response.data)
            });
        axios.get('/api/payment-summary')
            .then((response) =>
                setpaymentSummary(response.data))
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}