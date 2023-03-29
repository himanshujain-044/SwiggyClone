import React, { useCallback, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import "./SearchRestaurant.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../../api/api";
import { fetchDataAsync, setInitialState } from "../../slice/httpRequest";
import CircularSpinner from "../LoadingSpinners/CircularSpinner/CircularSpinner";
import useDebounce from "../../hooks/useDebounce";
const SearchRestaurant = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.httpRequest);
  const [searchData, setSearchData] = useState(null);
  const location = useSelector((state) => state.locationSidebar.location);
  const debouncedVal = useDebounce(inputVal, 1500);

  //   useEffect(() => {}, [data]);

  useEffect(() => {
    // getSearchInfo(debouncedVal);
    dispatch(
      fetchDataAsync([
        getSearchData,
        [location.lat, location.lng, debouncedVal],
      ])
    );
    // setSearchData(data);
    // return () => {
    //   console.log("31");
    //   dispatch(setInitialState());
    // };
  }, [debouncedVal, dispatch, location.lat, location.lng]);

  //   const getSearchInfo = useCallback(() => {

  //     );

  // const res = await getSearchData(location.lat, location.lng, e.target.value);
  //   }, [debouncedVal, dispatch, location.lat, location.lng]);
  if (isLoading) {
    console.log("12");
    return <CircularSpinner />;
  }
  return (
    <div className="search-container">
      <div className="search-container__input">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          maxLength="200"
          autoFocus
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        {!inputVal && <BiSearch />}
        {inputVal && (
          <RxCross2
            onClick={() => {
              setInputVal("");
              setSearchData(null);
              console.log("48");
            }}
          />
        )}
      </div>

      {searchData && <p>Is data</p> && console.log(searchData, isLoading)}
    </div>
  );
};

export default SearchRestaurant;
