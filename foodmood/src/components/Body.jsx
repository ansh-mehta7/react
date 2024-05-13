import RestrauntCard from "./restrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  let [newListRestraunt, setnewListRestyraunt] = useState([]);
  let [searchteaxt, setsearchteaxt] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      console.log(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setnewListRestyraunt(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setOriginalList(
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

  return newListRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for  dishes"
            className="search-food"
            value={searchteaxt}
            onChange={(event) => {
              setsearchteaxt(event.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // update my newListRestraunt to filter the restarunts in the search name appeared
              // and then set the new list to the newListRestraunt

              const filterdList = originalList.filter((restaurant) => {
                const namematch = restaurant.info.name
                  .toLowerCase()
                  .includes(searchteaxt.toLowerCase());

                const cuisinematch = restaurant.info.cuisines
                  .map((cuisine) => cuisine.toLowerCase())
                  .some((cuisine) =>
                    cuisine.includes(searchteaxt.toLowerCase())
                  );

                return namematch || cuisinematch;
              });

              setnewListRestyraunt([...filterdList]);
            }}
          >
            search
          </button>
        </div>
        <button
          className="top-rated"
          onClick={() => {
            const filterdList = newListRestraunt.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });

            setnewListRestyraunt([...filterdList]);
          }}
        >
          Top restraunts in your city
        </button>
      </div>
      <div className="restro-container">
        {newListRestraunt?.map((retsraunt) => (
          <RestrauntCard resData={retsraunt} key={retsraunt.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
