/* eslint-disable react/prop-types */
import { useContext } from "react";
import { storeContext } from "../../Contexts/StoreContext";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ btnText }) => {
  const { getTotalCartAmount } = useContext(storeContext);
  const navigate = useNavigate("");
  return (
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
          <b>
            ${(getTotalCartAmount() + getTotalCartAmount() * 0.05).toFixed(2)}
          </b>
        </div>
      </div>
      <button className="text-uppercase" onClick={() => navigate("/Order")}>
        proceed to {btnText}
      </button>
    </div>
  );
};

export default CartTotal;
