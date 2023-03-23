import React from "react";
import Crown from "../../assets/Crown.png";
import Check from "../../assets/Check.png";
import { RiVipCrownLine } from "react-icons/ri";
const PricingHeroSection = () => {
  const textAry = [
    { text: "Free Books, Articles, Podcasts , Videos" },
    { text: " Unlimited Articles" },
    { text: "Unlimited Podcasts" },
    { text: "Unlimited Videos" },
  ];
  return (
    <section className="bg-dreamLabColor4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-around max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative text-white">
          <img
            src={Crown}
            alt="crown png"
            className="w-28 h-28 absolute -top-14 -left-10"
          />
          <div className="flex flex-col justify-center items-center bg-[#3B4B72] rounded-[1rem] h-full max-w-[100%] w-full">
            <h3 className="text-center text-4xl font-semibold p-10">
              Premium Features
            </h3>
            <div className="flex items-center w-4/5 pb-10">
              <span className="mr-8">
                <RiVipCrownLine size={25} />
              </span>
              <p className="font-medium text-xl">
                Go premium and get the best of books
              </p>
            </div>
            <div className="flex items-center w-4/5 pb-10">
              <span className="mr-8">
                <RiVipCrownLine size={25} />
              </span>
              <p className="font-medium text-xl">
                မည်သည့် plan မဆို စိတ်တိုင်းမကျပါက တစ်ပတ်အတွင်း 100 % refund
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white w-auto p-10">
          <div className="flex justify-end">
            <p className="font-semibold text-xl p-5">Free</p>
            <p className="font-semibold text-xl p-5">Premium</p>
          </div>
          <ul className="w-max pb-20">
            {textAry.map((text) => {
              return (
                <li className="flex justify-around items-center text-start">
                  <div className="flex flex-col w-[100%] p-5">
                    <p className="block text-lg font-semibold">{text.text}</p>
                  </div>
                  <div className=" flex justify-center mr-20">
                    <img className=" ml-20" src={Check} />
                    <img className=" ml-20" src={Check} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
