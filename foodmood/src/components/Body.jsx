import React, { useEffect, useState } from "react";
import RestrauntCard from "./restrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [newListRestraunt, setnewListRestyraunt] = useState([]);
  const [searchteaxt, setsearchteaxt] = useState("");
  const online = useOnlineStatus();

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7287381&lng=75.80759929999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setnewListRestyraunt(restaurants);
      setOriginalList(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!online) {
    return <h1>You are offline</h1>;
  }

  return newListRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for dishes"
            className="search-food"
            value={searchteaxt}
            onChange={(event) => setsearchteaxt(event.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = originalList.filter((restaurant) => {
                const nameMatch = restaurant.info.name
                  .toLowerCase()
                  .includes(searchteaxt.toLowerCase());
                const cuisineMatch = restaurant.info.cuisines
                  .map((cuisine) => cuisine.toLowerCase())
                  .some((cuisine) =>
                    cuisine.includes(searchteaxt.toLowerCase())
                  );
                return nameMatch || cuisineMatch;
              });
              setnewListRestyraunt(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated"
          onClick={() => {
            const filteredList = newListRestraunt.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setnewListRestyraunt(filteredList);
          }}
        >
          Top restaurants in your city
        </button>
      </div>
      <div className="restro-container">
        {newListRestraunt.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            <RestrauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
