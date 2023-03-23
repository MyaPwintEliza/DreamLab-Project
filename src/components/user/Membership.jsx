import React from "react";
import { useUserSubsciption } from "../../hooks/useSubscriptions";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const MemberShip = () => {
  const { isLoading, data: subscriptionPlans, isError } = useUserSubsciption();

  return (
    <section className="px-2 md:px-6 lg:px-20 py-20 ">
      <h2 className="text-3xl font-semibold text-textColor1 text-center mb-20">
        Choose Your Membership
      </h2>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : null}
      {!isLoading && !isError ? (
        <div className="mx-20 grid grid-cols-3 gap-8">
          {subscriptionPlans.map((subscription) => (
            <article className="hover:border-2 w-auto hover:border-dreamLabColor2 shadow-lg border border-subtleGrey  py-4 px-6 rounded-xl flex flex-col min-h-[20rem]">
              <h3 className="font-bold text-2xl text-black my-5">
                {subscription.name}
              </h3>
              <p className="leading-7 mb-8">{subscription.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-[#595959] text-lg font-medium line-through">
                  {subscription.originalPrice} Ks
                </span>
                <span className="text-[#1D3160] text-2xl font-bold">
                  {subscription.salePrice} Ks
                </span>
              </div>
              <Link
                className="btn bg-dreamLabColor2 p-3 rounded-md mt-auto font-semibold text-center"
                to={`/pricing/purchase/${subscription.id}`}>
                <p>Purchase Now</p>
              </Link>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default MemberShip;
