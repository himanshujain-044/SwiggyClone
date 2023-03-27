import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbChartCandleFilled } from "react-icons/tb";
import { getRestaurants } from "../../../api/api";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Restaurants.scss";
import { fetchDataAsync } from "../../../slice/httpRequest";
import CardSpinner from "../../LoadingSpinners/CardSpinner/CardSpinner";
function Restaurants() {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.locationSidebar.location);
  const { data, isLoading } = useSelector((state) => state.httpRequest);
  const restaurantsList = data ? data.data.cards[2].data.data : "";
  const [navMenu, setMenu] = useState([
    { label: "Relevance", active: true },
    { label: "Delivery Time", active: false },
    { label: "Rating", active: false },
    { label: "Cost: Low to High", active: false },
    { label: "Cost: High to Low", active: false },
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

  const fetchRestaurants = useCallback(async () => {
    dispatch(fetchDataAsync([getRestaurants, [location.lat, location.lng]]));
  }, [dispatch, location]);
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (isLoading) {
    return <CardSpinner />;
  }

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
          <span className="restaurants-navbar__content--filter">
            Filters
            <span className="restaurants-navbar__content--filter-icon">
              <TbChartCandleFilled />
            </span>
          </span>
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
