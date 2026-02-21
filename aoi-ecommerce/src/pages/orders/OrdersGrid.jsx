import { OrderHeader } from './OrderHeader';
import { OrderDetailsGrid } from './OrderDetailsGrid';

export function OrdersGrid({ Orders }) {
    return (
        <>
            <div className="orders-grid">
                {Orders.map((order) => {
                    return (
                        <div key={order.id} className="order-container">

                            <OrderHeader order={order} />

                            <OrderDetailsGrid order={order} />
                        </div>
                    );
                })}
            </div>
        </>
    )
}