import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useDeleteCategory } from "../../../hooks/useCategories";

const DeleteCategory = ({ id, deleteStatus, setDeleteStatus, refreshData }) => {
  const deleteCategoryMutation = useDeleteCategory();

  const onDeleteHandler = () => {
    deleteCategoryMutation.mutate(id);
  };

  useEffect(() => {
    if (deleteCategoryMutation.isSuccess) {
      refreshData();
      setDeleteStatus(false);
    }
  }, [deleteCategoryMutation.isSuccess]);

  return (
    <section
      className={`fixed top-1/4 right-1/3 z-50 bg-white shadow-xl flex flex-col items-center w-[400px] py-8 rounded-md px-5 ${
        deleteStatus ? "block" : "hidden"
      }`}>
      <RiDeleteBin6Line size={80} className="text-start" />
      <p className="font-medium text-xl text-center my-5">
        Are you sure want to delete this category?
      </p>
      {deleteCategoryMutation.isError && (
        <p className="text-red-400">{deleteCategoryMutation.error.message}</p>
      )}
      <div className="flex gap-x-7">
        <button
          className="bg-cancelBtn py-2 px-4"
          onClick={() => setDeleteStatus(false)}>
          Cancel
        </button>
        <button
          className="bg-deleteBtn py-2 px-4 flex items-center gap-x-3"
          onClick={onDeleteHandler}>
          {deleteCategoryMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Delete
        </button>
      </div>
    </section>
  );
};

export default DeleteCategory;
