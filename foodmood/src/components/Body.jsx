import RestrauntCard from "./restrauntCard";
import restaurantList from "../utils/apidata";
import { useState } from "react";

// state variable
const Body = () => {
  // let varaible ; // noraml varable
  // state varaible
  // inside this usstate we pass the defualt value that variable will recieve
  //usestate is a hook which returns the array
  // the setnewListRestraunt function is used to update the newlistRetraunt tate variable it can be updated like a normal js vatriable

  // let [newListRestraunt, setnewListRestyraunt] = useState(restaurantList);
  let arr = useState(restaurantList);
  newListRestraunt=arr[0];
  setnewListRestyraunt=arr[1];
  


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

        {newListRestraunt.map((retsraunt) => (
          <RestrauntCard key={retsraunt.data.id} resData={retsraunt} />
        ))}

        {/* <RestrauntCard
            resName="Taj Mahal Indian Cuisine"
            rating="4.5"
            cuisine="Butter Chicken, Biryani, Naan"
          />
          <RestrauntCard
            resName="Spice Village"
            rating="4.3"
            cuisine="Tandoori Chicken, Rogan Josh, Samosas"
          />
          <RestrauntCard
            resName="Curry House"
            rating="4.2"
            cuisine="Chicken Tikka Masala, Aloo Gobi, Chapati"
          />
          <RestrauntCard
            resName="Masala Magic"
            rating="4.4"
            cuisine="Paneer Tikka, Palak Paneer, Mango Lassi"
          />
          <RestrauntCard
            resName="Chaat Corner"
            rating="4.1"
            cuisine="Pani Puri, Bhel Puri, Aloo Tikki"
          />
          <RestrauntCard
            resName="Dosa Hut"
            rating="4.6"
            cuisine="Masala Dosa, Idli, Vada"
          />
          <RestrauntCard
            resName="Biryani Paradise"
            rating="4.3"
            cuisine="Hyderabadi Biryani, Chicken 65, Raita"
          />
          <RestrauntCard
            resName="Punjabi Dhaba"
            rating="4.0"
            cuisine="Sarson Ka Saag, Makki Ki Roti, Lassi"
          />
          <RestrauntCard
            resName="Kebab Junction"
            rating="4.2"
            cuisine="Seekh Kebab, Chicken Reshmi Kebab, Tandoori Roti"
          />
          <RestrauntCard
            resName="Veggie Delight"
            rating="4.4"
            cuisine="Vegetable Biryani, Mix Veg Curry, Roti"
          />
          <RestrauntCard
            resName="Samosa House"
            rating="4.1"
            cuisine="Samosa, Chole Bhature, Kulfi"
          />
          <RestrauntCard
            resName="Mumbai Street Food"
            rating="4.5"
            cuisine="Vada Pav, Pav Bhaji, Dabeli"
          /> */}
      </div>
    </div>
  );
};
export default Body;
