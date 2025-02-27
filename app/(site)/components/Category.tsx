"use client";
import React from "react";
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";

const Category = () => {
  const { homeCategory, setHomeCategory, setheaderImageSrc } = useUIState();

  const onClickCategory = (item: any) => {
    if (homeCategory === item.label) {
      setheaderImageSrc("");
      setHomeCategory("");
    } else {
      setheaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={() => onClickCategory(item)}
            key={item.label}
            className={`h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg 
            bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer ${
              item.label === homeCategory &&
              "bg-white text-black hover:bg-white"
            }`}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
