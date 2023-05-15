import React from "react";
import { useGetPopularBooks } from "../../../hooks/useBooks";
import { ClipLoader } from "react-spinners";
import Card from "./Card";

export default function PopularBooks() {
  const { isLoading, data } = useGetPopularBooks();
  console.log(data);
  return (
    <section>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : (
        <Card books={data} />
      )}
    </section>
  );
}
