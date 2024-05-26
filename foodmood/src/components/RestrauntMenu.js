import React from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestrauntMenu(resid);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info ?? {};

  let itemCards = [];

  if (
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards
  ) {
    itemCards =
      resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
  }

  if (
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.carousel
  ) {
    const carouselItems =
      resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel.map(
        (item) => item.dish
      );
    itemCards = itemCards.concat(carouselItems);
  }

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
