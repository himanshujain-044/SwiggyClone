import axios from "axios";
export const getSearchLocations = async (searchInput, types = "") => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}misc/place-autocomplete?input=${searchInput}&types=${types}`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getRestaurants = async (
  lat = 18.5204303,
  lng = 73.8567437,
  pageType = "DESKTOP_WEB_LISTING"
) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=${pageType}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getLocationDetails = async (placeId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}misc/address-recommend?place_id=${placeId} `
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getCurrentLocation = async () => {
  try {
    const res = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// // place_id
// https://www.swiggy.com/dapi/misc/address-recommend?place_id=ChIJr5H1LErReDkRcBMotaLqRvQ
