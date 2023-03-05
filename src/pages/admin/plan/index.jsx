import React, { useState } from "react";
import PlanItem from "./PlanItem";
import CreatePlan from "./CreatePlan";
import EditPlan from "./EditPlan";

import DeletePlan from "./DeletePlan";
import AdminContentTitle from "../../../components/admin/AdminContentTitle";

const index = () => {
  return (
    <article className="w-full mx-5">
      <AdminContentTitle/>
      <PlanItem />
      <CreatePlan createStatus={false}/>
      <EditPlan editStatus={false}/>
      <DeletePlan/>
    </article>
  );
};

export default index;