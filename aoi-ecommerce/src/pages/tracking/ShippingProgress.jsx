import dayjs from "dayjs"



export function ShippingProgress({ order, orderProduct }) {
    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs // Total time required for delivery
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs // Amount of time passed since order creation
    
    let deliveryProgress = (timePassedMs/totalDeliveryTimeMs) * 100
    if (deliveryProgress > 100) {
        deliveryProgress = 100;
    }

    const isPreparing = deliveryProgress < 33;
    const isShipped = deliveryProgress >= 33 && deliveryProgress < 100;
    const isDelivered = deliveryProgress === 100;

    return (
        <>
            <div className="progress-labels-container">
                <div className={`progress-label ${isPreparing && 'current-status'}`}>
                    Preparing
                </div>
                <div className={`progress-label ${isShipped && 'current-status'}`}>
                    Shipped
                </div>
                <div className={`progress-label ${isDelivered && 'current-status'}`}>
                    Delivered
                </div>
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar" style={{width: `${deliveryProgress}%`}}></div>
            </div>
        </>
    )
}