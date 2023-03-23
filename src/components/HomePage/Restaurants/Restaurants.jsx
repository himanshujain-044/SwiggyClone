import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../../api/api";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Restaurants.scss";
function Restaurants() {
  //   const dispatch = useDispatch();
  const location = useSelector((state) => state.locationSidebar.location);
  const [restaurantsList, setRestaurantsList] = useState({});
  const [navMenu, setMenu] = useState([
    { label: "Relevance", active: true },
    { label: "Delivery Time", active: false },
    { label: "Rating", active: false },
    { label: "Cost: Low to High", active: false },
    { label: "Cost: High to Low", active: false },
    { label: "Filters", active: false },
  ]);

  const handleOnMenuChange = (selectedMenuIdx) => {
    setMenu((preVal) => {
      for (let i = 0; i < preVal.length; i++) {
        preVal[i].active = false;
      }
      preVal[selectedMenuIdx].active = true;
      return [...preVal];
    });
  };
  useEffect(() => {
    async function getRestaurantsData() {
      const data = await getRestaurants(location.lat, location.lng);
      setRestaurantsList(data.data.cards[2].data.data);
    }
    getRestaurantsData();
  }, [location]);
  return (
    <div className="restaurants-main">
      <div className="restaurants-navbar">
        <div className="restaurants-navbar__total-count">
          {restaurantsList.totalRestaurants} restaurants
        </div>
        <div className="restaurants-navbar__content">
          {navMenu.map((menu, index) => (
            <span
              key={index}
              className={
                menu.active ? "restaurants-navbar__content--active-menu" : ""
              }
              onClick={() => {
                handleOnMenuChange(index);
              }}
            >
              {menu.label}
            </span>
          ))}
        </div>
      </div>

      {restaurantsList.cards && (
        <div className="resaurants-container">
          {restaurantsList.cards.map((card, index) => (
            <RestaurantCard key={index} data={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Restaurants;
