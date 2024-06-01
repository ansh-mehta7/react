import { FOOD_CARD_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, areaName, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="p-4 m-4 w-[300px] h-[500px] bg-gray-200 hover:bg-gray-400 ">
      <img
        className="w-64 h-64  rounded-lg"
        src={FOOD_CARD_URL + cloudinaryImageId}
        alt="res-food-image"
      ></img>
      <h4 className="font-bold py-2 text-lg"> {name}</h4>
      <h4 className="">{cuisines.join(",")} </h4>
      <h4 className="font-bold">⭐{avgRating}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestrauntCard;
