import React from "react";
import Board from "../../../assets/Board.png";

import { FaHeadphones } from "react-icons/fa";
import { RiArticleFill, RiBook2Fill } from "react-icons/ri";
import { ImFilm } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function BoardSection() {
  const customStyles = {
    "icons-span": "@apply flex items-center",
    "icon-wrapper":
      "@apply flex items-center justify-center text-dreamLabColor1 border bg-dreamLabColor2 bg-opacity-30 border-none w-12  h-12 rounded-full",
    "icon-p": "@apply ml-5 font-medium text-sm md:text-lg",
  };
  return (
    <section className="my-20">
      <div className="flex flex-col items-center md:flex-row md:justify-evenly">
        <section className="mb-8 md:mb-0">
          <img src={Board} alt="board-image" />
        </section>
        <section className="text-center md:text-left">
          <h4 className="text-2xl font-semibold">Dream Lab FREE</h4>
          <p className="text-xl mt-6">
            E-books are fun to read anywhere, anytime!
          </p>
          <div className="icons flex flex-col mt-10">
            <div className="first-row flex justify-start">
              <span className={`${customStyles["icons-span"]} mr-8 md:mr-16`}>
                <div className={customStyles["icon-wrapper"]}>
                  <RiBook2Fill size={25} />
                </div>
                <p className={customStyles["icon-p"]}>Free Books</p>
              </span>
              <span className={customStyles["icons-span"]}>
                <div className={customStyles["icon-wrapper"]}>
                  <FaHeadphones size={25} />
                </div>
                <p className={customStyles["icon-p"]}>Free Podcasts</p>
              </span>
            </div>
            <div className="sec-row flex justify-start mt-8 md:mt-10">
              <span
                className={`${customStyles["icons-span"]} mr-5 md:mr-[68px]`}>
                <div className={customStyles["icon-wrapper"]}>
                  <RiArticleFill size={25} />
                </div>
                <p className={customStyles["icon-p"]}>Free Articles</p>
              </span>
              <span className={`${customStyles["icons-span"]}`}>
                <div className={customStyles["icon-wrapper"]}>
                  <ImFilm size={25} />
                </div>
                <p className={customStyles["icon-p"]}>Free Videos</p>
              </span>
            </div>
            <div className="btn flex justify-center md:justify-start items-center mt-8 md:mt-10">
              <div className="p-2 border rounded-md w-40 md:w-60 h-10 bg-dreamLabColor1 text-white cursor-pointer flex items-center justify-center">
                Discover More
                <span className="ml-3">
                  <HiOutlineArrowNarrowRight size={20} />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
