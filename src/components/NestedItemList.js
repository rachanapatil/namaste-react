import React, { useState } from "react";
import ItemList from "./ItemList";

const NestedItemList = ({ categories }) => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const handleClick = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };
  return (
    <div>
      {categories.map((category, index) => (
        <div key={category.title}>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <span className="py-4 font-bold text-sm">
              {category.title} ({category?.itemCards?.length})
            </span>
            {category?.itemCards?.length && <span>⬇️</span>}
          </div>
          {openCategoryIndex === index && (
            <ItemList items={category?.itemCards} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedItemList;
