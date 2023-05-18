import React from "react";
import { ClipLoader } from "react-spinners";
import Card from "./Card";
import { useGetLatestBooks } from "../../../hooks/useBooks";

export default function LatestBooks() {
  const { isLoading, data } = useGetLatestBooks();
  console.log(data);
  return (
    <section>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : (
        <Card datas={data.items} title="Latest Books" />
      )}
    </section>
  );
}
