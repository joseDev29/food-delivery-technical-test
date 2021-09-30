import { OrderDataContainer } from "./styles";

export const OrderData = () => {
  return (
    <OrderDataContainer>
      <div className="order-data-address">
        <p>625 St Marks Ave</p>
        <span>Edit</span>
      </div>
      <div className="order-data-time">
        <div>
          <span className="material-icons-round">schedule</span>
          <p>35 min</p>
        </div>
        <p>Choose time</p>
      </div>
    </OrderDataContainer>
  );
};
