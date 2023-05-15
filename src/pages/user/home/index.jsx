import React from "react";
import HeroSection from "../../../components/user/home/HeroSection";
import BoardSection from "../../../components/user/home/BoardSection";
import PopularBooks from "../../../components/user/home/PopularBooks";

export default function index() {
  return (
    <article>
      <HeroSection />
      <BoardSection />
      <PopularBooks />
    </article>
  );
}
