/* eslint-disable react/prop-types */
import "./FoodDisplay.css";
import { useContext } from "react";
import { storeContext } from "../../Contexts/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(storeContext);
  return (
    <div className="food-display mt-4" id="food-display">
      <h1 className="fs-1">Top dishes near you</h1>
      <div className="food-display-list">
        {foodList.length && (
          foodList.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
