import dayjs from "dayjs";

export function DeliveryDate({ selectedDeliveryOptions }) {
    return (
        <div className="delivery-date">
            {dayjs(selectedDeliveryOptions.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    )
}