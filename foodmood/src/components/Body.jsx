import RestrauntCard from "./restrauntCard";
import restaurantList from "../utils/apidata";
import { useEffect, useState } from "react";

const Body = () => {
  let [newListRestraunt, setnewListRestyraunt] = useState(restaurantList);

  // let arr = useState(restaurantList);
  // newListRestraunt = arr[0];
  // setnewListRestyraunt = arr[1];

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.7446794&lng=75.8782344"
    );
    const jsonData = await data.json();
    console.log(
      jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );

    setnewListRestyraunt(
      jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  return (
    <div className="body">
      <div className="search-food">search</div>
      <div className="filter-btn">
        <button
          className="btn"
          onClick={() => {
            const filterdList = newListRestraunt.filter((restaurant) => {
              return restaurant.data.avgRating > 4;
            });
            setnewListRestyraunt(filterdList);
          }}
        >
          filter restraunts
        </button>
      </div>
      <div className="restro-container">
        {/* <RestrauntCard resData={restaurantList[0]} /> */}

        {/* <RestrauntCard
            resName="Taj Mahal Indian Cuisine"
            rating="4.5"
            cuisine="Butter Chicken, Biryani, Naan"
          />

        */}

        {newListRestraunt.map((retsraunt) => (
          <RestrauntCard  resData={retsraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
