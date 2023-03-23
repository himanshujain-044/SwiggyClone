import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocationDetails, getSearchLocations } from "../../api/api";
import { toggleOpenClose, setLocation } from "../../slice/locationSidebar";
import { CiLocationOn } from "react-icons/ci";
import { BiCurrentLocation } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "./LocationSidebar.scss";

const LocationSidebar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [searchLocations, setSearchLocations] = useState([]);

  useEffect(() => {
    async function getSearchLoc() {
      if (value.length > 2) {
        const data = await getSearchLocations(value);
        setSearchLocations(data);
      } else {
        setSearchLocations([]);
      }
    }

    getSearchLoc();
  }, [value]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      setValue(value);
    } else {
      setValue("");
    }
  };

  const getLocationData = async (lovationPlaceId) => {
    const data = await getLocationDetails(lovationPlaceId);
    dispatch(setLocation(data.data[0].geometry.location));
    dispatch(toggleOpenClose());
  };
  return (
    <>
      <div className="location-modal">
        <div className="cancel-icon">
          <RxCross2
            onClick={() => {
              dispatch(toggleOpenClose());
            }}
          />
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg cancel-icon"
          viewBox="0 0 16 16"
          onClick={() => {
            dispatch(toggleOpenClose());
          }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg> */}
        <div className="input-field">
          <input
            type="text"
            id="input-field"
            placeholder="Search for area, street name.."
            value={value}
            onChange={(e) => handleChange(e)}
          />
          {value && (
            <div className="input-cancel" onClick={() => setValue("")}>
              Cancel
            </div>
          )}
        </div>
        {value &&
          searchLocations.length > 0 &&
          searchLocations.map((location, id) => (
            <div
              key={location.place_id}
              className="search-location"
              onClick={() => {
                getLocationData(location.place_id);
              }}
            >
              <div className="search-location-icon">
                <CiLocationOn />
              </div>
              <div className="search-location-add-cont">
                <div className="search-location-des">
                  {location.terms[0].value}
                </div>
                <div className="search-location-add">
                  {location.description.replace(
                    `${location.terms[0].value},`,
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}

        {!value && (
          <div className="current-location">
            <div>
              <BiCurrentLocation />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
              </svg> */}
            </div>
            <div className="geo-location-cont">
              <div className="geo-location">Get current location</div>
              <div className="gps">Using GPS</div>
            </div>
          </div>
        )}
      </div>
      <div
        className="overlay"
        onClick={() => {
          dispatch(toggleOpenClose());
        }}
      ></div>
    </>
  );
};

export default LocationSidebar;
