import axios from "axios";
export const getSearchLocations = async (searchInput, types = "") => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}misc/place-autocomplete?input=${searchInput}&types=${types}`
    );
    return data.data.data;
  } catch (e) {
    console.log(e);
  }
};
