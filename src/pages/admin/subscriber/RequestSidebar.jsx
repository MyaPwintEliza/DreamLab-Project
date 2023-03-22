import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { useUpdateUserSubscription } from "../../../hooks/useSubscribers";
import { ClipLoader } from "react-spinners";
const RequestSidebar = ({
  setIsSidebarOpen,
  userDetails,
  handleRefreshData,
}) => {
  const {
    id,
    customerName,
    purchaseId,
    startDate,
    planName,
    amount,
    bankSlipImage,
  } = userDetails;

  const subscriberMutation = useUpdateUserSubscription();

  const handleUpdate = (status) => {
    const Data = { status, id };
    subscriberMutation.mutate(Data);
  };

  useEffect(() => {
    if (subscriberMutation.isSuccess) {
      setIsSidebarOpen(false);
      handleRefreshData();
    }
  }, [subscriberMutation.isSuccess]);

  return (
    <aside
      className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 flex justify-end "
      onClick={() => setIsSidebarOpen(false)}
    >
      <div
        className="max-w-[30rem] w-full bg-white h-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex justify-between items-center mb-10">
          <h3 className="font-bold text-black text-2xl">Request Subscriber</h3>
          <AiOutlineClose size={25} onClick={() => setIsSidebarOpen(false)} />
        </section>
        <ul>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Customer Name
            </span>
            <span className="text-textColor1 font-medium">{customerName}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Purchase Id
            </span>
            <span className="text-textColor1 font-medium">{purchaseId}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Purchase Date
            </span>
            <span className="text-textColor1  font-medium">{startDate}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">
              Plan name
            </span>
            <span className="text-textColor1 font-medium">{planName}</span>
          </li>
          <li className="flex items-center gap-4 mb-6">
            <span className="text-[#595959] font-medium basis-1/2">Price</span>
            <span className="text-textColor1 font-medium">{amount} Ks</span>
          </li>
          <label className="text-[#595959] font-medium ">bank slip photo</label>
          {bankSlipImage ? (
            <img
              className="mt-4 max-h-[15rem] object-cover"
              src={bankSlipImage ? bankSlipImage : ""}
              alt="bank slip image"
            />
          ) : (
            <div className="mt-4 border border-dashed grid place-items-center bg-[#E4E4E4]  border-slate-900 min-h-[10rem] rounded-lg">
              <BsImage className="text-[#8C8C8C]" size={48} />
            </div>
          )}
        </ul>
        <div className="flex mt-6 justify-between gap-4">
          <CustomButton
            clsname="rounded-lg py-2 px-4 border border-[#EF0202] text-[#EF0202] w-1/2"
            handleUpdate={() => handleUpdate("c")}
            isLoading={subscriberMutation.isLoading}
          >
            Reject
          </CustomButton>

          <CustomButton
            clsname="rounded-lg py-2 px-4 border btn_primary !w-1/2"
            handleUpdate={() => handleUpdate("a")}
            isLoading={subscriberMutation.isLoading}
          >
            Accept
          </CustomButton>
        </div>
      </div>
    </aside>
  );
};

const CustomButton = ({ clsname, children, handleUpdate, isLoading }) => {
  return (
    <button className={clsname} onClick={handleUpdate} disabled={isLoading}>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <ClipLoader size={22} />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default RequestSidebar;
