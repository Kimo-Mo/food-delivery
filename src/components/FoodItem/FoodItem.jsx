/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { storeContext } from "../../Contexts/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } =
    useContext(storeContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container position-relative">
        <img src={image} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="add icon"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove icon"
              onClick={() => removeFromCart(id)}
            />
            <p className="mb-0">{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add icon"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p className="mb-0">{name}</p>
          <img src={assets.rating_starts} alt="rating starts" />
        </div>
        <p className="food-info-desc mb-0">{description}</p>
        <p className="food-info-price mb-0">{price}$</p>
      </div>
    </div>
  );
};

export default FoodItem;
