import { FOOD_CARD_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData, key } = props;
  const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines } =
    resData?.data;
  return (
    <div
      className="restro-card"
      style={{
        backgroundColor: "#F0FFFF",
      }}
    >
      <img
        className="res-food-image"
        src={FOOD_CARD_URL + cloudinaryImageId}
        alt="res-food-image"
      ></img>
      <h4> {name}</h4>
      <h4>{cuisines.join(",")} </h4>
      <h4>⭐{avgRating}</h4>
      <h4>deliveryTime {deliveryTime}mins</h4>
    </div>
  );
};
export default RestrauntCard;
