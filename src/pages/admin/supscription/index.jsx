import React, { useState } from "react";
import SubscriptionItem from "./SubscriptionItem";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import DeleteModel from "./DeleteModel";

const index = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [id, setId] = useState("");

  const refreshData = () => {};

  return (
    <article>
      <section className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl">Subscription plan lists</h3>
        <Link
          to={"/admin/subscriptions/create"}
          className="flex btn-2 items-center py-2 px-10 gap-x-2"
        >
          <IoMdAddCircle />
          Create Subscription
        </Link>
      </section>
      <article className="my-10">
        <SubscriptionItem
          subscriptionData={{
            id: 1,
            name: "6months Plan",
            description: "Lorem ipsum dolor sit amet consectetur. Rutrum porttitor sagittis ipsum consectetur cras. Varius nibh molestie fames integer leo proin netus vulputate nunc.",
            salePrice: 49000,
            originalPrice: 90000,
          }}
          setId={setId}
          setDeleteStatus={setDeleteStatus}
        />
      </article>
      <article className="my-10">
        <SubscriptionItem
          subscriptionData={{
            id: 1,
            name: "6month",
            description: "Lorem ipsum dolor sit amet consectetur. Rutrum porttitor sagittis ipsum consectetur cras. Varius nibh molestie fames integer leo proin netus vulputate nunc.",
            salePrice: 49000,
            originalPrice: 90000,
          }}
          setId={setId}
          setDeleteStatus={setDeleteStatus}
        />
      </article>
      <article className="my-10">
        <SubscriptionItem
          subscriptionData={{
            id: 1,
            name: "6month",
            description: "Lorem ipsum dolor sit amet consectetur. Rutrum porttitor sagittis ipsum consectetur cras. Varius nibh molestie fames integer leo proin netus vulputate nunc.",
            salePrice: 49000,
            originalPrice: 90000,
          }}
          setId={setId}
          setDeleteStatus={setDeleteStatus}
        />
      </article>
      <DeleteModel
        id={id}
        deleteStatus={deleteStatus}
        setDeleteStatus={setDeleteStatus}
        refreshData={refreshData}
      />
    </article>
  );
};

export default index;
