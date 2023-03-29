import React from "react";

import { Link } from "react-router-dom";

const SubscriptionItem = ({ subscriptionData, setId, setDeleteStatus }) => {
  return (
    <article className="shadow-lg  p-10 my-6">
      <div className="grid grid-cols-5 gap-x-10">
        <section className="col-span-3">
          <h2 className="font-medium text-2xl pb-3">{subscriptionData.name}</h2>
          <p>{subscriptionData.description}</p>
        </section>
        <div className="col-span-1"></div>
        <article className="flex gap-x-5 col-span-1 self-end">
          <Link
            to={`/admin/subscription/edit/${subscriptionData.id}`}
            className="bg-dreamLabColor2 rounded-md btn-2 py-2 px-6">
            Edit
          </Link>
          <button
            className="text-red-600 font-medium"
            onClick={() => {
              setId(`${subscriptionData.id}`);
              setDeleteStatus(true);
            }}>
            Delete
          </button>
        </article>
      </div>
      <div className="mt-5 flex items-end gap-x-5">
        <p className="line-through text-textColor3">
          {subscriptionData.salePrice} Ks
        </p>
        <p className="text-dreamLabColor1 text-2xl font-semibold">
          {subscriptionData.originalPrice} Ks
        </p>
      </div>
    </article>
  );
};

export default SubscriptionItem;
