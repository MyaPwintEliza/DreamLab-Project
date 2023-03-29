import React, { useState } from "react";
import AuthorItem from "../AuthorItem";
import CreateArticleAuthor from "../CreateAuthor";
import EditArticleAuthor from "../EditAuthor";
import { useArticleAuthorsData, useUpdateArticleAuthor, useCreateArticleAuthor, useDeleteArticleAuthor } from "../../../../hooks/useAuthors";
import DeleteArticleAuthor from "../DeleteAuthor";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const index = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [id, setId] = useState("");
  const [editAuthor, setEditAuthor] = useState({ status: "", name: "", id: "" });

  const { isLoading, isError, error, data, refetch } = useArticleAuthorsData();
  console.log('author data: ', data);

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
       <div className="flex justify-between">
        <div className="flex">
        <Link to={`/admin/authors/articleauthors`} className={`flex items-center p-2 text-dreamLabColor1 border-b-4`}>
          Article Authors
          </Link>
        <Link to={`/admin/authors/bookauthors`} className="flex items-center p-2 ">
          Book Authors
        </Link>
      </div>
      <button
        className="flex bg-dreamLabColor2 items-center py-2 px-10 gap-x-2 rounded-md"
        onClick={() => setCreateStatus(true)}
      >
        <IoMdAddCircle />
        Create Author
      </button>
      </div>
      
      <article className="my-10">
        {data.map((author) => {
          return (
          <AuthorItem
            author={author}
            setId={setId}
            setEditStatus={setEditStatus}
            setDeleteStatus={setDeleteStatus}
            setEditAuthor={setEditAuthor}
          />
        )})}
      </article>
      <CreateArticleAuthor
        createStatus={createStatus}
        setCreateStatus={setCreateStatus}
        refreshData={refreshData}
        mutation={useCreateArticleAuthor}
      />
      <EditArticleAuthor
        editStatus={editStatus}
        editAuthor={editAuthor}
        setEditStatus={setEditStatus}
        refreshData={refreshData}
        mutation={useUpdateArticleAuthor}
      />
      <DeleteArticleAuthor
        id={id}
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        refreshData={refreshData}
        mutation={useDeleteArticleAuthor}
      />
    </article>
  );
};

export default index;
