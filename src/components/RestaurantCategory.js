import React, { useState } from "react";
import ItemList from "./ItemList";
import NestedItemList from "./NestedItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-white shadow-2xl p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}{" "}
            {data?.itemCards?.length ? `(${data?.itemCards?.length})` : ""}
          </span>
          {data?.itemCards?.length && <span>⬇️</span>}
        </div>
        {showItems &&
          data?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
            <ItemList items={data?.itemCards} />
          )}
        {/* {data?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && (
          <NestedItemList categories={data?.categories} />
        )} */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
