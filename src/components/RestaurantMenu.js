import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const cards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = cards[2]?.card?.card;

  const validTypes = [
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  ];

  const categories = cards.filter((c) => {
    const cardData = c.card?.card;
    return validTypes.includes(cardData?.["@type"]);
  });

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card.card}
          showItems={index === showIndex}
          setShowIndex={() => {
            if (index === showIndex) {
              setShowIndex(null);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
