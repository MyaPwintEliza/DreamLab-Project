import React from "react";
import { ClipLoader } from "react-spinners";
import Card from "./Card";
import { useGetPopularArticles } from "../../../hooks/useArticles";

export default function PopularArticles() {
  const { isLoading, data } = useGetPopularArticles();
  console.log(data);
  return (
    <section>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : (
        <Card datas={data} title="Popular Articles"/>
      )}
    </section>
  );
}
