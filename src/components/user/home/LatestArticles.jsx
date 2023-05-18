import React from "react";
import { ClipLoader } from "react-spinners";
import Card from "./Card";
import { useGetLatestArticles } from "../../../hooks/useArticles";

export default function LatestArticles() {
  const { isLoading, data } = useGetLatestArticles();
  console.log(data);
  return (
    <section>
      {isLoading ? (
        <div className="py-20 flex justify-center items-center">
          <ClipLoader size={48} />
        </div>
      ) : (
        <Card datas={data.items} title="Latest Articles" />
      )}
    </section>
  );
}
