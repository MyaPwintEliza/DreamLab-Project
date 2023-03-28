import React, { useEffect, useState } from "react";
import { GiCutDiamond } from "react-icons/gi";

const ArticleItem = ({
  article,
  setEditStatus,
  setEditArticle,
  setDeleteStatus,
}) => {
  const { articleAuthors, status, categories, isFree } = article;
  const [currentStatus, setStatus] = useState({ bg: "", text: "" });
  const [currentIsFreeStatus, setCurrentIsFreeStatus] = useState("");
  console.log(isFree);
  const handleStatus = () => {
    if (status === "a") {
      setStatus({ bg: "bg-[#0E833E]", text: "active" });
    } else {
      setStatus({ bg: "bg-[#C08D0B]", text: "pending" });
    }
  };

  useEffect(() => {
    handleStatus();
  }, [article]);

  return (
    <div>
      <section className="shadow-xl flex justify-between items-center py-8 px-5 rounded-md my-5 w-full">
        <img
          className="border-2  border-dreamLabColor1 w-20 object-contain mr-3"
          src={article.mainImage}
          alt="icon image"
        />

        <p className="text-lg font-medium mr-5">{article.title}</p>
        <div className="flex flex-col whitespace-nowrap overflow-hidden ">
          {articleAuthors.map((author) => (
            <span key={author.id}>{`${author.name},`}</span>
          ))}
        </div>

        <div className="flex">
          {/* badge */}
          <div
            className={`flex justify-center rounded-md ${
              isFree ? "bg-[#1A335B]" : "bg-[#C08D0B]"
            } text-white mr-5`}>
            <p className="mx-3"> {isFree ? "Free" : "Premium"}</p>
          </div>

          <div
            className={`flex justify-center rounded-md ${currentStatus.bg} text-white`}>
            <p className="mx-5"> {currentStatus.text}</p>
          </div>
        </div>

        {/* category */}
        <div className="flex justify-center items-center">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="p-2 border-2 border-black rounded-full text-sm mr-5">
              {category.name}
            </div>
          ))}
        </div>

        <div className="flex gap-x-5">
          <button
            className="bg-dreamLabColor2 py-2 px-6 rounded-md"
            onClick={() => {
              setEditArticle(article);
              setEditStatus(true);
            }}>
            Edit
          </button>
          <button
            className="text-red-600 font-medium rounded-md"
            onClick={() => {
              setId(article.id);
              setDeleteStatus(true);
            }}>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArticleItem;
