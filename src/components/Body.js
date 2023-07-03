import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRes, setSearchRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4473388&lng=78.3564887&page_type=DESKTOP_WEB_LISTING"
    );

    x = await data.json();
    setFilteredRestaurants(x?.data?.cards[2]?.data?.data?.cards);
    setSearchRes(x?.data?.cards[2]?.data?.data?.cards);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchResult = filteredRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchRes(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (x) => x.data.avgRating > 4
            );
            setSearchRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setSearchRes(x?.data?.cards[2]?.data?.data?.cards);
          }}
        >
          Back
        </button>
      </div>
      <div className="res-container">
        {searchRes.map((x) => (
          <Link key={x.data.id} to={"/restaurants/" + x.data.id}>
            <RestaurantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
