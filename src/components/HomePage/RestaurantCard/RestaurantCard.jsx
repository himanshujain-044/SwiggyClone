import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { GoTriangleLeft } from "react-icons/go";
// import { useDispatch, useSelector } from "react-redux";
// import { getRestaurants } from "../../../api/api";
import "./RestaurantCard.scss";
function RestaurantCard({ data }) {
  return (
    <div className="card">
      <img
        src={process.env.REACT_APP_IMAGE_URL + data.data.cloudinaryImageId}
        alt={data.data.name}
        width="254"
        height="160"
      />
      {data.data.ribbon && (
        <div className="card__ribbon">
          {data.data.ribbon[0].type}
          <div className="card__ribbon--icon">
            <GoTriangleLeft />
          </div>
        </div>
      )}
      <div className="card__desc">
        <div className="card__desc--name">{data.data.name}</div>
        <div className="card__desc--type">{data.data.cuisines.join(", ")}</div>
      </div>
      <div className="card__details">
        <div
          className="card__details--rating"
          style={{
            backgroundColor: data.data.avgRating >= 4 ? "#48c479" : "#db7c38",
          }}
        >
          <AiFillStar />
          <span>{data.data.avgRating}</span>
        </div>
        <div className="card__details--dot">
          <BsDot />
        </div>
        <div className="card__details--dlvry-time">
          {data.data.deliveryTime} MINS
        </div>
        <div className="card__details--dot">
          <BsDot />
        </div>
        <div className="card__details--price">{data.data.costForTwoString}</div>
      </div>
      {data.data.aggregatedDiscountInfo && (
        <div className="card__offer">
          <span className="card__offer--icon">
            <TbDiscount2 />
          </span>

          <span>
            {data.data.aggregatedDiscountInfo.shortDescriptionList[0].meta}
          </span>
        </div>
      )}
      <div className="card__quick-view">
        <span>Quick View</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
