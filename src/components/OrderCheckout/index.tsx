import { selectOrderValue } from "../../context/generalSlice";
import { useStateSelector } from "../../context/hooks";
import { OrderCheckoutMain, PersonsCounter } from "./styles";

export const OrderCheckout = () => {
  const orderValue = useStateSelector(selectOrderValue);

  return (
    <OrderCheckoutMain>
      <div className="order-price">
        <p>Total:</p>
        <h5>${orderValue.toFixed(2)}</h5>
      </div>
      <div className="order-actions">
        <PersonsCounter>
          <p>Persons</p>
          <div>
            <span className="counter-persons-btn ">-</span>
            <span className="counter-persons-value ">1</span>
            <span className="counter-persons-btn ">+</span>
          </div>
        </PersonsCounter>

        <div className="order-checkout-button">
          Checkout <span className="material-icons-round">arrow_forward</span>
        </div>
      </div>
    </OrderCheckoutMain>
  );
};
