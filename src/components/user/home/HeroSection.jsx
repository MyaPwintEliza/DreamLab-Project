import React from "react";
import banner from "../../../assets/banner.png";
import playstore from "../../../assets/playstore.png";
import applestore from "../../../assets/applestore.png";
import { BiCrown } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section flex">
      <div className="bg-[#293C68] flex-grow basis-2/5 flex flex-col p-14 text-white">
        <div className="text-wrapper mx-10">
          <h2 className="text-4xl font-bold">နေ့စဉ်စာ တစ်အုပ်ဖတ်ပါ</h2>
          <p className=" mt-10  leading-loose  mb-10 text-lg">
            အဆီအနှစ်ထုတ်ထားတဲ့ Personal, Professional နဲ့ Business Development
            စာအုပ်များကို မြန်မာလို တစ်နေရာတည်းတွင် အချိန်မရွေး နေရာမရွေး
            ဖတ်ရှု့နိုင်ပါသည်။
          </p>
        </div>
        <Link
          to="/pricing"
          className=" cursor-pointer h-[50px] text-textColor4 font-medium  mx-10 btn flex items-center justify-center bg-dreamLabColor2 w-96  rounded-sm shadow-xl  ">
          <span className="mr-5">
            <BiCrown size={20} />
          </span>
          Subscribe to Premium{" "}
        </Link>

        <div className="row flex mt-10 mx-10">
          <img className="mr-5" src={playstore} alt="playstore image" />
          <img src={applestore} alt="applestore image" />
        </div>
      </div>

      <div className="basis-3/5">
        <img src={banner} className="h-full" alt="banner image" />
      </div>
    </section>
  );
}
