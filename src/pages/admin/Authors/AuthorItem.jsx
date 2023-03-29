import React from "react";

const AuthorItem = ({
  author,
  setEditAuthor,
  setId,
  setEditStatus,
  setDeleteStatus,
}) => {
  return (
    <section className=" shadow-2xl flex justify-between items-center py-8 px-5 rounded-md my-5 w-full">
      <p className="text-lg font-medium basis-1/4">{author.name}</p>
      <p
        className={`text-center px-4 py-2 rounded-full basis-1/8 ${
          author.status === "a" ? "bg-[#28d628]" : "bg-[#ea8634]"
        }`}>
        {author.status === "a" ? "active" : "pending"}
      </p>
      <div className="flex gap-x-5 basis-1/4">
        <button
          className="bg-dreamLabColor2 py-2 px-6 rounded-md"
          onClick={() => {
            setEditAuthor(author);
            setEditStatus(true);
          }}>
          Edit
        </button>
        <button
          className="text-red-600 font-medium rounded-md"
          onClick={() => {
            setId(author.id);
            setDeleteStatus(true);
          }}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default AuthorItem;
