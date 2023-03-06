import React from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className="flex gap-10 bg-dreamLabColor3 bg-opacity-20">
        <div className="container px-32 mx-auto py-10">
          <div className="grid grid-cols-4 text-dreamLabColor4">
            <img
              className="mt-5 px-5 w-42"
              src="src/images/Dream-Lab-Logo2.svg"
              alt=""
            />
            <div>
              <h3 className="font-bold text-2xl mb-5">Get Started</h3>
              <ul className="leading-10 font-medium text-lg">
                <li>Books</li>
                <li>Articles</li>
                <li>Podcasts</li>
                <li>Videos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-5">Useful Links</h3>
              <ul className="leading-10 font-medium text-lg">
                <li>Library</li>
                <li>Why Choose</li>
                <li>Pricing</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-5">Contact Us</h3>
              <div>
                <div className="flex items-center gap-1 md:gap-3 py-2">
                  <div className="bg-dreamLabColor1 rounded-full h-8 w-8 flex items-center justify-center ">
                    <MdPhoneInTalk size={23} className="text-white" />
                  </div>
                  <p className="font-medium text-lg  break-all">09794461888</p>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <div className="bg-dreamLabColor1 rounded-full h-8 w-8 flex items-center justify-center">
                    <MdMail size={21} className="text-white" />
                  </div>
                  <p className="font-medium text-lg break-all">
                    www.m.me/dreamlab.news
                  </p>
                </div>

                <div className="flex mt-5">
                  <h2 className="mr-5 text-2xl">Follow Us</h2>
                  <div className="flex gap-3">
                    <AiFillFacebook size={30} className="text-dreamLabColor1" />
                    <AiFillInstagram
                      size={30}
                      className="text-dreamLabColor1"
                    />
                    <AiFillLinkedin size={30} className="text-dreamLabColor1" />
                    <AiFillYoutube size={30} className="text-dreamLabColor1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-14 text-sm font-medium text-grey">
            Copyright 2022 Dreamlabnews.All Rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
