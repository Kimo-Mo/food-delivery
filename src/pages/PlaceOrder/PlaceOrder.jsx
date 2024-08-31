import { useContext } from "react";
import { storeContext } from "../../Contexts/StoreContext";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(storeContext);
  return (
    <form className="place-order container">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="street" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" name="city" placeholder="City" required />
          <input type="text" name="state" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" name="zipCode" placeholder="Zip Code" required />
          <input type="text" name="country" placeholder="Country" required />
        </div>
        <input type="text" name="phone" placeholder="Phone Number" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${(getTotalCartAmount() * 0.05).toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + getTotalCartAmount() * 0.05}</b>
            </div>
          </div>
          <button onClick={(e) => e.preventDefault()}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
