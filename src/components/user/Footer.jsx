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
      <footer className="flex gap-10 bg-dreamLabColor3 bg-opacity-20 w-full">
        <div className="container px-5 py-10">
          <div className="flex flex-col md:flex-row text-dreamLabColor4 items-center">
            <div className="w-full md:w-52 flex justify-center md:justify-start">
              <img
                className="mt-5 px-5 w-36 md:w-52"
                src="src/images/Dream-Lab-Logo2.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between md:ml-20 md:w-2/3 mt-5 md:mt-0">
              <div className="md:mt-0">
                <h3 className="font-bold text-base md:text-2xl mb-5">Useful Links</h3>
                <ul className="flex flex-wrap justify-between leading-10 font-medium text-lg">
                  <div className="flex flex-col justify-between text-left">
                    <li>Home</li>
                    <li>Library</li>
                  </div>
                  <div className="flex flex-col justify-between">
                    <li>Pricing</li>
                    <li>Categories</li>
                  </div>
                </ul>
                <div className="flex mt-5 items-center">
                  <h2 className="mr-5 md:text-2xl text-base font-semibold">Follow Us</h2>
                  <div className="flex gap-3">
                    <AiFillFacebook size={40} className="text-dreamLabColor1" />
                    <AiFillInstagram size={40} className="text-dreamLabColor1" />
                    <AiFillLinkedin size={40} className="text-dreamLabColor1" />
                    <AiFillYoutube size={40} className="text-dreamLabColor1" />
                  </div>
                </div>
              </div>
              <div className="md:mt-0 mt-10">
                <h3 className="font-bold text-base md:text-2xl mb-5">Contact Us</h3>
                <div>
                  <div className="flex items-center gap-1 md:gap-3 py-2">
                    <div className="bg-dreamLabColor1 rounded-full h-8 w-8 flex items-center justify-center">
                      <MdPhoneInTalk size={23} className="text-white" />
                    </div>
                    <p className="font-medium text-base md:text-lg break-all">09794461888</p>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <div className="bg-dreamLabColor1 rounded-full h-8 w-8 flex items-center justify-center">
                      <MdMail size={21} className="text-white" />
                    </div>
                    <p className="font-medium text-base md:text-lg break-all">www.m.me/dreamlab.news</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-14 text-sm text-left md:text-base font-medium text-grey">
            Copyright 2022 Dreamlabnews.
            All Rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
