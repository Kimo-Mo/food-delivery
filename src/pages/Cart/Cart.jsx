import { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../Contexts/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(storeContext);
  const navigate = useNavigate("");
  return (
    <div className="cart container">
      <div className="cart-items text-sm-start text-center">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p
                  className="remove-from-cart btn btn-danger"
                  onClick={() => removeFromCart(item.id)}>
                  X
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <b>${(getTotalCartAmount() + getTotalCartAmount() * 0.05).toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/Order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promoCode">
          <p className="text-capitalize text-secondary">
            if you have a promo code, enter it here
          </p>
          <div className="cart-promoCode-input">
            <input type="text" placeholder="Promo Code" name="promoCode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
