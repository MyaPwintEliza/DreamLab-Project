import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BookItem = ({ book }) => {
  const { title, mainImage, isFree, status, categories, bookAuthors, slug } =
    book;

  const handleStatus = () => {
    if (status === "a") {
      setStatus({ cls: "bg-[#058F23]", text: "active" });
    } else {
      setStatus({ cls: "bg-[#C99206]", text: "pending" });
    }

    if (!isFree) {
      setCurrentIsFreeStatus("bg-[#1D3160]");
    } else {
      setCurrentIsFreeStatus("bg-green-600");
    }
  };
  const [currentStatus, setStatus] = useState({ cls: "", text: "" });
  const [currentIsFreeStatus, setCurrentIsFreeStatus] = useState("");

  useEffect(() => {
    handleStatus();
  }, [book]);

  return (
    <article className="grid grid-cols-12 border-b  py-6 items-center gap-4">
      <div className="col-span-1 text-textColor1 font-semibold">
        <img
          src={mainImage}
          className="max-w-[5rem] max-h-[7rem] object-cover"
        />
      </div>

      <div className="col-span-2">
        <span className="font-medium  rounded-full text-textColor1">
          {title}
        </span>
      </div>

      <div className="col-span-2  text-textColors1 font-medium flex gap-2 whitespace-nowrap overflow-hidden ">
        {bookAuthors.map((author) => (
          <span key={author.id}>{author.name}</span>
        ))}
      </div>

      <div className="col-span-2   flex gap-2">
        <div
          className={`w-1/2  ${currentIsFreeStatus} py-1 flex justify-center items-center rounded`}
        >
          {isFree ? (
            <span className="text-white text-sm">Free</span>
          ) : (
            <span className="text-white text-sm">Premium</span>
          )}
        </div>
        <span
          className={`w-1/2 py-1  text-white text-center rounded text-sm ${currentStatus.cls}`}
        >
          {currentStatus.text}
        </span>
      </div>
      <div className="col-span-3   flex gap-2 whitespace-nowrap overflow-hidden">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" border-2 border-slate-900 p-1 flex justify-center items-center rounded-full text-sm"
          >
            {category.name}
          </div>
        ))}
      </div>

      <Link
        className=" col-span-1 btn_primary font-medium !py-1 block text-center "
        to={`/admin/books/edit/${slug}`}
      >
        Edit
      </Link>
    </article>
  );
};

export default BookItem;