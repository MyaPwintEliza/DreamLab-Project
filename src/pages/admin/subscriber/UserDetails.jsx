import React, { useEffect, useState } from "react";

const UserDetails = ({ subscriber, setUserDetails, setIsSidebarOpen }) => {
  const {
    id,
    user,
    status,
    subscription,
    startDate,
    expiredDate,
    paymentImage,
  } = subscriber;
  const handleStatus = () => {
    if (status === "p") {
      setStatus({ cls: "bg-[#C99206]", text: "request" });
    } else if (status === "e") {
      setStatus({ cls: "bg-[#BC3131]", text: "expired" });
    } else if (status === "c") {
      setStatus({ cls: "bg-[#BC3131]", text: "cancel" });
    } else if (status === "a") {
      setStatus({ cls: "bg-[#058F23]", text: "active" });
    }
  };
  const [currentStatus, setStatus] = useState({ cls: "", text: "" });

  useEffect(() => {
    handleStatus();
  }, [subscriber]);

  const handleViewDetails = () => {
    setUserDetails({
      id: id,
      customerName: user.displayName || user.email,
      planStatus: status,
      purchaseId: subscriber.paymentId || "123456789",
      startDate: startDate,
      expiredDate: expiredDate,
      planName: subscription.name,
      amount: subscription.salePrice,
      bankSlipImage: paymentImage,
    });
    setIsSidebarOpen(true);
  };

  return (
    <>
      <article className="grid grid-cols-12 border-b  py-6">
        <span className="col-span-3 text-textColor1 font-semibold">
          {user.displayName || user.email}
        </span>
        <div className={`col-span-2`}>
          <span
            className={`px-4 py-2 text-white text-sm ${currentStatus.cls} rounded-full `}
          >
            {currentStatus.text}
          </span>
        </div>
        <span className="col-span-3  text-[#8E98B0] font-semibold ">
          {subscription.name}
        </span>
        <span className="col-span-2  text-[#8E98B0] font-semibold ">
          {startDate}
        </span>
        <span className="col-span-2 text-dreamLabColor1 font-semibold">
          <button onClick={handleViewDetails}>View Details</button>
        </span>
      </article>
    </>
  );
};

export default UserDetails;
