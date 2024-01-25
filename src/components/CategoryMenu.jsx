import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {

  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category)
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log("categories ", categories);
  };


  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="m-6">
      <h3 className="text-xl font-semibold">These are our categories</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${selectedCategory ==="All" && "bg-green-500 text-white"}`}
        onClick={() => dispatch(setCategory("All"))}>All</button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${selectedCategory ===category && "bg-green-500 text-white"} ` }
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
