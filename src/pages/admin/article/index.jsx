import React, { useState } from "react";

import AdminContentTitle from "../../../components/admin/AdminContentTitle";
import { ClipLoader } from "react-spinners";
// import { useCategoriesData } from "../../../hooks/useCategories";
// import EditCategory from "./EditCategory";
// import DeleteCategory from "./DeleteCategory";
import { useArticlesData } from "../../../hooks/useArticles";
import ArticleItem from "./ArticleItem";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const index = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [editArticle, setEditArticle] = useState(null);

  const { isLoading, isError, error, data, refetch } = useArticlesData();

  const refreshData = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <article className="flex items-center justify-center h-screen">
        <ClipLoader />
      </article>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log(data.items);

  return (
    <article>
      <section className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <h3 className="font-semibold text-2xl mr-5">Uploaded Articles</h3>
          <p className="font-semibold">{`total : ${data.items.length}`}</p>
        </div>
        <Link
          to={"/admin/articles/create"}
          className="flex bg-dreamLabColor2 rounded-md btn-2 items-center py-2 px-10 gap-x-2">
          <IoMdAddCircle />
          Create Article
        </Link>
      </section>
      <article className="my-10">
        {data.items.map((article) => (
          <ArticleItem
            key={article.slug}
            article={article}
            setEditArticle={setEditArticle}
            setEditStatus={setEditStatus}
            setDeleteStatus={setDeleteStatus}
          />
        ))}
      </article>
      {/* <CreateCategory
        createStatus={createStatus}
        setCreateStatus={setCreateStatus}
        refreshData={refreshData}
      />
      <EditCategory
        editStatus={editStatus}
        editCategory={editCategory}
        setEditStatus={setEditStatus}
        refreshData={refreshData}
      />

      <DeleteCategory
        id={id}
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        refreshData={refreshData}
      /> */}
    </article>
  );
};

export default index;
