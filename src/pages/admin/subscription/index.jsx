import React, { useState } from "react";
import SubscriptionItem from "./SubscriptionItem";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import DeleteModel from "./DeleteModel";
import { useSubscriptionsData } from "../../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";

const index = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [id, setId] = useState("");

  const { isLoading, isError, error, data, refetch } = useSubscriptionsData();

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
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <article>
      <section className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl">Subscription Plans List</h3>
        <Link
          to={"/admin/subscription/create"}
          className="flex bg-dreamLabColor2 rounded-md btn-2 items-center py-2 px-10 gap-x-2"
        >
          <IoMdAddCircle />
          Create Subscription
        </Link>
      </section>
      <article className="my-10">
        {data.length <= 0 && (
          <article className="text-grey flex flex-col w-full items-center my-10">
            <RiVipCrownLine size={80} />
            <p className="text-lg">
              You have no subscription plan created yet!
            </p>
          </article>
        )}
        {data.map((subscription, key) => (
          <SubscriptionItem
            subscriptionData={subscription}
            setId={setId}
            setDeleteStatus={setDeleteStatus}
          />
        ))}
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
