import React from "react";
import banner from "../../../assets/banner.png";
import playstore from "../../../assets/playstore.png";
import applestore from "../../../assets/applestore.png";
import { BiCrown } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section flex flex-col-reverse lg:flex-row">
      <div className="bg-[#293C68] flex-grow flex flex-col p-10 lg:p-14 text-white">
        <div className="text-wrapper mx-5 lg:mx-10">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10">
            နေ့စဉ်စာ တစ်အုပ်ဖတ်ပါ
          </h2>
          <p className="text-base lg:text-lg leading-loose mb-6 lg:mb-10">
            အဆီအနှစ်ထုတ်ထားတဲ့ Personal, Professional နဲ့ Business Development
            စာအုပ်များကို မြန်မာလို တစ်နေရာတည်းတွင် အချိန်မရွေး နေရာမရွေး
            ဖတ်ရှု့နိုင်ပါသည်။
          </p>
        </div>
        <Link
          to="/pricing"
          className="cursor-pointer h-[40px] lg:h-[50px] text-textColor4 font-medium mx-5 lg:mx-10 btn flex items-center justify-center bg-dreamLabColor2 w-[300px] lg:w-96 rounded-sm shadow-xl mb-6 lg:mb-0"
        >
          <span className="mr-3">
            <BiCrown size={18} />
          </span>
          Subscribe to Premium
        </Link>
        <div className="row flex mx-5 lg:mx-10 mt-5">
          <img className="mr-3 lg:mr-5" src={playstore} alt="playstore image" />
          <img src={applestore} alt="applestore image" />
        </div>
      </div>

      <div>
        <img src={banner} className="h-auto w-full lg:w-auto lg:h-full" alt="banner image" />
      </div>
    </section>
  );
}
