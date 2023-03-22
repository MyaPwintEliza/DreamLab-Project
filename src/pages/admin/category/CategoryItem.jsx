import React from "react";

const CategoryItem = ({
  setId,
  category,
  setEditCategory,
  setEditStatus,
  setDeleteStatus,
}) => {
  return (
    <section className="shadow-xl flex justify-between items-center py-8 px-5 rounded-md my-5 w-full">
      <div className="flex items-center justify-center">
        <img
          className="rounded-full w-10 object-contain mr-3"
          src={category.icon}
          alt="icon image"
        />
        <p className="text-lg font-medium">{category.name}</p>
      </div>
      <div className="flex gap-x-5">
        <button
          className="bg-dreamLabColor2 py-2 px-6 rounded-md"
          onClick={() => {
            setId(`${category.id}`);
            setEditCategory(category);
            setEditStatus(true);
          }}>
          Edit
        </button>
        <button
          className="text-red-600 font-medium rounded-md"
          onClick={() => {
            setId(category.id);
            setDeleteStatus(true);
          }}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default CategoryItem;
