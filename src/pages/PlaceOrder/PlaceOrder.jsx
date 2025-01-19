import CartTotal from "../../components/CartTotal/CartTotal";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  return (
    <form className="place-order container" onSubmit={(e) => e.preventDefault()}>
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
        <CartTotal btnText="payment" />
      </div>
    </form>
  );
};

export default PlaceOrder;
