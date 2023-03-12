import React, { useState } from "react";
import PlanItem from "./PlanItem";
import CreatePlan from "./CreatePlan";
import EditPlan from "./EditPlan";
import { usePlanData } from "../../../hooks/usePlans";
import DeletePlan from "./DeletePlan";
import AdminContentTitle from "../../../components/admin/AdminContentTitle";
import { ClipLoader } from "react-spinners";

const index = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [code, setCode] = useState("");
  const [editPlan, setEditPlan] = useState({ code: "", name: "" });

  const { isLoading, isError, error, data, refetch } = usePlanData();
  console.log('data: ', data);

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
        title="Plans List"
        setCreateStatus={setCreateStatus}
        createTitle="Create Plan"
      />
      <article className="my-10">
        {data.map((plan) => (
          <PlanItem
            plan={plan}
            setEditStatus={setEditStatus}
            setDeleteStatus={setDeleteStatus}
            setCode={setCode}
            setEditPlan={setEditPlan}
          />
        ))}
      </article>
      <CreatePlan
        createStatus={createStatus}
        setCreateStatus={setCreateStatus}
        refreshData={refreshData}
      />
      <EditPlan
        editStatus={editStatus}
        editPlan={editPlan}
        setEditStatus={setEditStatus}
        refreshData={refreshData}
      />
      <DeletePlan
        code={code}
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        refreshData={refreshData}
      />
    </article>
  );
};

export default index;
