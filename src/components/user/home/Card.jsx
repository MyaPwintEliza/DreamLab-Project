import React from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";

export default function Card({ datas,title }) {
  // console.log(books);

  return (
    <section className="py-10">
      <h3 className="text-center text-3xl font-semibold mb-10">
        {title}
      </h3>
      <div className="mx-5 sm:mx-10 md:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {datas.map((data) => (
          <div
            key={data.id}
            className="p-5 hover:border-dreamLabColor2 hover:border-2 border border-subtleGrey shadow-md rounded-md w-full h-auto flex flex-col">
            <img
              className="object-contain h-48 sm:h-56 md:h-64 w-full"
              src={data.mainImage}
              alt={data.slug}
            />
            <p className="py-3 font-semibold">{data.slug}</p>
            {data.bookAuthors && (
              <p className="mb-3 text-textColor1">
                by {data.bookAuthors.map((author) => author.name).join(", ")}
              </p>
            )}

            <div className="flex justify-between items-center">
              <div className="flex items-center text-textColor1 ">
                <span className="mr-2">
                  <BiTime />
                </span>
                <p>{data.readingTime} mins</p>
              </div>
              <Link className="text-dreamLabColor1 hover:underline">
                View Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
