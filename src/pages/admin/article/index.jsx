import React, { useState } from "react";

import AdminContentTitle from "../../../components/admin/AdminContentTitle";
import { ClipLoader } from "react-spinners";
// import { useCategoriesData } from "../../../hooks/useCategories";
// import EditCategory from "./EditCategory";
// import DeleteCategory from "./DeleteCategory";
import { useArticlesData } from "../../../hooks/useArticles";
import ArticleItem from "./ArticleItem";

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

  return (
    <article>
      <AdminContentTitle
        title="Uploaded Articles"
        total={data.items.length}
        setCreateStatus={setCreateStatus}
        createTitle="Create Articles"
      />
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
