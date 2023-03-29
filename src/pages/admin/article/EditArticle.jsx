import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ReactSwitch from "react-switch";
import { EditableTextBox } from "../../../components/form/EditableTextBox";
import ImageUpload from "../../../components/form/imageUpload";
import InputForm from "../../../components/form/InputForm";
import Select from "../../../components/form/Select";
import { useGetOneArticle, useUpdateArticle } from "../../../hooks/useArticles";
import { useArticleAuthorsData } from "../../../hooks/useAuthors";
import { useCategoriesData } from "../../../hooks/useCategories";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EditArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useCategoriesData();
  const {
    data: authorData,
    isLoading: authorLoading,
    refetch,
  } = useArticleAuthorsData();

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("Type Article Description");
  const [content, setContent] = useState("Type Content Description");
  const [selectAuthors, setSelectAuthors] = useState([]);
  const [selectCategories, setSelectCategories] = useState([]);
  const [status, setStatus] = useState({
    free: false,
    active: false,
  });

  const [selectAuthId, setSelectAuthId] = useState([]);
  const [selectCatId, setSelectCatId] = useState([]);

  const { data: ArticleData, isSuccess } = useGetOneArticle(slug);
  const updateArticleMutation = useUpdateArticle();

  const editArticleSchema = yup.object({
    title: yup.string().required(),
    readingTime: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(editArticleSchema) });

  if (isLoading || authorLoading) {
    return (
      <article className="flex items-center justify-center h-screen">
        <ClipLoader />
      </article>
    );
  }

  const onError = (errors, e) => console.log("errors :" + errors, e);
  const onSubmit = (data) => {
    const catIdAry = JSON.stringify(selectCatId);
    const authIdAry = JSON.stringify(selectAuthId);
    let isFree, isActive;

    if (status.free) {
      isFree = 1;
    } else {
      isFree = 0;
    }

    if (status.active) {
      isActive = "a";
    } else {
      isActive = "p";
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("readingTime", data.readingTime.toString() + " min");
    formData.append("shortDesc", description);
    formData.append("content", content);
    formData.append("mainImage", image[0], image[0].name);
    formData.append("categories", catIdAry);
    formData.append("articleAuthors", authIdAry);
    formData.append("isFree", isFree);
    formData.append("status", isActive);
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    updateArticleMutation.mutate({ formData, id: ArticleData.id });
  };

  useEffect(() => {
    if (updateArticleMutation.isSuccess) {
      navigate("/admin/articles");
    }
  }, [updateArticleMutation.isSuccess]);
  useEffect(() => {
    if (isSuccess) {
      setValue("title", ArticleData.title);
      setValue("readingTime", ArticleData.readingTime);
      setValue("shortDesc", ArticleData.shortDesc);
      setValue("content", ArticleData.content);
      setValue("mainImage", ArticleData.mainImage);
      setValue("categories", ArticleData.catIdAry);
      setValue("articleAuthors", ArticleData.authIdAry);

      if (ArticleData.status) {
        setStatus({ free: ArticleData.isFree, active: true });
      } else {
        setStatus({ free: ArticleData.isFree, active: false });
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (updateArticleMutation.isSuccess) {
      refetch();
    }
  }, [updateArticleMutation.isSuccess]);
  return (
    <section>
      <div className="w-1/4 flex justify-between items- mb-10">
        <Link
          to="/admin/articles"
          className="flex items-center hover:underline font-semibold text-xl">
          <BsArrowLeft className="text-dreamLabColor1 " />
          <p className="ml-3 text-dreamLabColor1">Back</p>
        </Link>

        <h3 className="font-bold text-xl">Update Article</h3>
      </div>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col">
          <div className="grid grid-cols-10">
            <div className="col-span-5 mr-10">
              <ImageUpload
                uplaodImage={image}
                setUploadImage={setImage}
                label="Upload a file"
              />
            </div>
            <div className="col-span-5 ">
              <InputForm
                title="Article Name"
                name="title"
                errors={errors}
                placeholder="Type book name"
                register={register}
              />
              <Select
                errors={errors}
                label="Author"
                options={selectAuthors}
                setOptions={setSelectAuthors}
                defaultValues={authorData}
                id={selectAuthId}
                setId={setSelectAuthId}
              />
              <Select
                errors={errors}
                label="Categories"
                options={selectCategories}
                setOptions={setSelectCategories}
                defaultValues={data}
                id={selectCatId}
                setId={setSelectCatId}
              />
              <InputForm
                id="readingTime"
                title="Duration"
                type="number"
                name="readingTime"
                errors={errors}
                placeholder="Type Duration"
                register={register}
              />
              <div className="font-bold tracking-wide">
                <div className="flex w-2/3 items-center justify-between mt-4">
                  <p>Free</p>
                  <ReactSwitch
                    onChange={() =>
                      setStatus({ ...status, free: !status.free })
                    }
                    checked={status.free}
                  />
                </div>

                <div className="flex w-2/3 justify-between items-center mt-4">
                  <p>Active</p>
                  <ReactSwitch
                    onChange={() =>
                      setStatus({ ...status, active: !status.active })
                    }
                    checked={status.active}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-10 mt-5 ">
            <EditableTextBox value={description} setValue={setDescription} />
          </div>
          <div className="col-span-10 mt-5 ">
            <EditableTextBox value={content} setValue={setContent} />
          </div>
          {updateArticleMutation.isError ?? (
            <p className="text-red-400">
              {updateArticleMutation.error.message}
            </p>
          )}
          <button
            className="bg-dreamLabColor2 rounded-md py-2 my-8 flex items-center justify-center gap-x-3"
            type="submit">
            {updateArticleMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Save
          </button>
          {updateArticleMutation.isSuccess ?? (
            <p className="text-green-600">Edit request sent successfully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EditArticle;
