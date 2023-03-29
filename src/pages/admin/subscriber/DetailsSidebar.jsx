import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
const DetailsSidebar = ({ setIsSidebarOpen, userDetails }) => {
  const handleStatus = () => {
    if (planStatus === "p") {
      return { cls: "text-[#C99206]", text: "request" };
    } else if (planStatus === "e") {
      return { cls: "text-[#BC3131]", text: "expired" };
    } else if (planStatus === "c") {
      return { cls: "text-[#BC3131]", text: "cancel" };
    } else if (planStatus === "a") {
      return { cls: "text-[#058F23]", text: "active" };
    }
  };

  const {
    customerName,
    planStatus,
    purchaseId,
    expiredDate,
    planName,
    amount,
    bankSlipImage,
  } = userDetails;

  const [statusCls, setStatusCls] = useState(handleStatus());

  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-end "
      onClick={() => setIsSidebarOpen(false)}
    >
      <div
        className="max-w-[25rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex justify-between items-center mb-10">
          <h3 className="font-bold text-black text-2xl">Plan History</h3>
          <AiOutlineClose size={25} onClick={() => setIsSidebarOpen(false)} />
        </section>
        <ul>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Customer Name
            </span>
            <span className="text-slate-900 font-medium">{customerName}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Plan Status
            </span>
            <span className={`${statusCls?.cls} font-medium `}>
              {statusCls?.text}
            </span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Purchase Id
            </span>
            <span className="text-slate-900 font-medium">{purchaseId}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Expired Date
            </span>
            <span className="text-slate-900 font-medium">{expiredDate}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Plan name
            </span>
            <span className="text-slate-900 font-medium">{planName}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">Price</span>
            <span className="text-slate-900">{amount} Ks</span>
          </li>
          <label className="text-slate-900 font-bold ">Bank Slip Image</label>
          {bankSlipImage ? (
            <img
              className="mt-4 max-h-[20rem] object-cover"
              src={bankSlipImage ? bankSlipImage : ""}
              alt="bank slip image"
            />
          ) : (
            <div className="mt-4 border border-dashed grid place-items-center bg-[#E4E4E4]  border-slate-900 min-h-[10rem] rounded-lg">
              <BsImage className="text-[#8C8C8C]" size={48} />
            </div>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default DetailsSidebar;
