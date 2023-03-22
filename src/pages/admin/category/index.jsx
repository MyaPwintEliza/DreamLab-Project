import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import CreateCategory from "./CreateCategory";

import AdminContentTitle from "../../../components/admin/AdminContentTitle";
import { ClipLoader } from "react-spinners";
import { useCategoriesData } from "../../../hooks/useCategories";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const index = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [id, setId] = useState(0);
  const [editCategory, setEditCategory] = useState({
    id: "",
    name: "",
    icon: "",
  });

  const { isLoading, isError, error, data, refetch } = useCategoriesData();

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
        title="Category"
        setCreateStatus={setCreateStatus}
        createTitle="Create Category"
      />
      <article className="my-10">
        {data.map((category) => (
          <CategoryItem
            key={category.id}
            setId={setId}
            category={category}
            setEditCategory={setEditCategory}
            setEditStatus={setEditStatus}
            setDeleteStatus={setDeleteStatus}
          />
        ))}
      </article>
      <CreateCategory
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
      />
    </article>
  );
};

export default index;
