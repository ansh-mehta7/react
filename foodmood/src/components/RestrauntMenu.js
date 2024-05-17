import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resid } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7287381&lng=75.80759929999999&restaurantId=" +
        resid +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setresInfo(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, id, cuisines } =
    resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
