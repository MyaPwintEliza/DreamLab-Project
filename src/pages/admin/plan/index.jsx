import React, { useState } from "react";
import PlanItem from "./PlanItem";
import CreatePlan from "./CreatePlan";
import EditPlan from "./EditPlan";

import DeletePlan from "./DeletePlan";
import AdminContentTitle from "../../../components/admin/AdminContentTitle";

const index = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  return (
    <article className="w-full mx-5">
      <AdminContentTitle setCreateStatus={setCreateStatus}/>
      <PlanItem setEditStatus={setEditStatus} setDeleteStatus={setDeleteStatus} />
      <CreatePlan createStatus={createStatus} setCreateStatus={setCreateStatus}/>
      <EditPlan editStatus={editStatus} setEditStatus={setEditStatus}/>
      <DeletePlan  deleteStatus={deleteStatus} setDeleteStatus={setDeleteStatus}/>
    </article>
  );
};

export default index;
