import React, { useEffect, useState } from "react";
import HeroSection from "../../../components/user/home/HeroSection";
import BoardSection from "../../../components/user/home/BoardSection";
import PopularBooks from "../../../components/user/home/PopularBooks";
import { TOKEN_LOCAL_STORAGE } from "../../../hooks/useUserAuth";
import PopularArticles from "../../../components/user/home/PopularArticles";
import WhyChoose from "../../../components/user/home/WhyChoose";
import LatestBooks from "../../../components/user/home/LatestBooks";
import LatestArticles from "../../../components/user/home/LatestArticles";

export default function index() {

  return (
    <article>
      <HeroSection />
      <BoardSection />
      <PopularBooks />
      <WhyChoose/>
      <PopularArticles/>
      <LatestBooks/>
      <LatestArticles/>
    </article>
  );
}
