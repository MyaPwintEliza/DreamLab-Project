import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useDeletePlan } from "../../../hooks/usePlans";

const DeletePlan = ({ code, deleteStatus, setDeleteStatus, refreshData }) => {
  const deletePlanMutation = useDeletePlan();

  const onDeleteHandler = () => {
    deletePlanMutation.mutate(code);
  };

  useEffect(() => {
    if (deletePlanMutation.isSuccess) {
      refreshData();
      setDeleteStatus(false);
    }
  }, [deletePlanMutation.isSuccess]);

  return (
    <section
      className={`fixed top-1/4 right-1/3 z-50 bg-white shadow-xl flex flex-col items-center w-[400px] py-8 rounded-md px-5 ${
        deleteStatus ? "block" : "hidden"
      }`}
    >
      <RiDeleteBin6Line size={80} className="text-start" />
      <p className="font-medium text-xl text-center my-5">
        Are you sure want to delete this plan?
      </p>
      {deletePlanMutation.isError && (
        <p className="text-red-400">{deletePlanMutation.error.message}</p>
      )}
      <div className="flex gap-x-7">
        <button
          className="bg-cancelBtn py-2 px-4"
          onClick={() => setDeleteStatus(false)}
        >
          Cancel
        </button>
        <button
          className="bg-deleteBtn py-2 px-4 flex items-center gap-x-3"
          onClick={onDeleteHandler}
        >
          {deletePlanMutation.isLoading && (
            <ClipLoader color="white" size={20} />
          )}
          Delete
        </button>
      </div>
    </section>
  );
};

export default DeletePlan;
