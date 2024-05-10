import RestrauntCard from "./restrauntCard";
import { useEffect, useState } from "react";

const Body = () => {
  let [newListRestraunt, setnewListRestyraunt] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setnewListRestyraunt(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search-food">search</div>
      <div className="filter-btn">
        <button
          className="btn"
          onClick={() => {
            console.log("Original List:", newListRestraunt);
            const filterdList = newListRestraunt.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            console.log("Filtered List:", filterdList);
            setnewListRestyraunt([...filterdList]);
          }}
        >
          filter restraunts
        </button>
      </div>
      <div className="restro-container">
        {newListRestraunt?.map((retsraunt) => (
          <RestrauntCard resData={retsraunt} key={retsraunt.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
