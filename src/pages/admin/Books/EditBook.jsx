import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ReactSwitch from "react-switch";
import { EditableTextBox } from "../../../components/form/EditableTextBox";
import ImageUpload from "../../../components/form/imageUpload";
import InputForm from "../../../components/form/InputForm";
import Select from "../../../components/form/Select";
import { useGetOneBook, useUpdateBook } from "../../../hooks/useBooks";
import { useBookAuthorsData } from "../../../hooks/useAuthors";
import { useCategoriesData } from "../../../hooks/useCategories";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EditBook = () => {
  const { slug } = useParams();
  // const navigate = useNavigate();
  const { data: catagoriesData, isLoading: catLoading } = useCategoriesData();
  const {
    data: authorData,
    isLoading: authorLoading,
    // refetch,
  } = useBookAuthorsData();
  const { data: BookData, isSuccess } = useGetOneBook(slug);
  const updateBookMutation = useUpdateBook();

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [selectAuthors, setSelectAuthors] = useState([]);
  const [selectCategories, setSelectCategories] = useState([]);
  const [status, setStatus] = useState({
    free: false,
    active: false,
  });

  const [selectAuthId, setSelectAuthId] = useState([]);
  const [selectCatId, setSelectCatId] = useState([]);

  const editBookSchema = yup.object({
    title: yup.string().required(),
    readingTime: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(editBookSchema) });

  if (catLoading || authorLoading) {
    return (
      <article className="flex items-center justify-center h-screen">
        <ClipLoader />
      </article>
    );
  }

  useEffect(() => {
    if (isSuccess) {
      setValue("title", BookData?.title);
      setValue("pages", BookData?.page);
      setValue("readingTime", BookData?.readingTime);
      setDescription(BookData?.shortDesc);
      setValue("shrotDesc", BookData?.shortDesc);
      setContent(BookData?.content);
      setValue("content", BookData?.content);
      setValue("mainImage", BookData?.mainImage);
      setValue("categories", BookData?.catagories);
      setValue("bookAuthors", BookData?.authors);

      if (BookData?.status === "a") {
        setStatus({ free: BookData.isFree, active: true });
      } else {
        setStatus({ free: BookData.isFree, active: false });
      }
    }
    console.log("bookdata", BookData);
  }, [isSuccess]);

  const onError = (errors, e) => console.log("errors :" + errors, e);

  const onSubmit = (data) => {
    // console.log("edit data: ", data);
    const catagories = JSON.stringify(selectCatId);
    const authors = JSON.stringify(selectAuthId);
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
    formData.append("id", data.id);
    formData.append("title", data.title);
    formData.append("readingTime", data.readingTime.toString() + " min");
    formData.append("shortDesc", description);
    formData.append("content", content);
    formData.append("mainImage", image[0], image[0].name);
    formData.append("categories", catagories);
    formData.append("bookAuthors", authors);
    formData.append("isFree", isFree);
    formData.append("status", isActive);
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    updateBookMutation.mutate({ formData, id: BookData.id });
  };

  // useEffect(() => {
  //   if (updateBookMutation.isSuccess) {
  //     navigate("/admin/books");
  //   }
  // }, [updateBookMutation.isSuccess]);

  // useEffect(() => {
  //   if (updateBookMutation.isSuccess) {
  //     refetch();
  //   }
  // }, [updateBookMutation.isSuccess]);

  return (
    <section>
      <div className="w-1/4 flex justify-between items- mb-10">
        <Link
          to="/admin/books"
          className="flex items-center hover:underline font-semibold text-xl">
          <BsArrowLeft className="text-dreamLabColor1 " />
          <p className="ml-3 text-dreamLabColor1">Back</p>
        </Link>

        <h3 className="font-bold text-xl">Update Book</h3>
      </div>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col">
          <div className="grid grid-cols-10">
            <div className="col-span-5 mr-10">
              <ImageUpload
                uploadImage={image}
                setUploadImage={setImage}
                label="Upload a file"
                existingImg={BookData?.mainImage}
              />
            </div>
            <div className="col-span-5 ">
              <InputForm
                id="title"
                title="Book Name"
                name="title"
                placeholder="Type book name"
                register={register}
                errors={errors}
              />
              <InputForm
                id="pages"
                label="Book Pages"
                name="pages"
                type="number"
                placeholder="Type number of pages"
                register={register}
                errors={errors}
              />
              <Select
                errors={errors}
                label="Author"
                options={selectAuthors}
                setOptions={setSelectAuthors}
                defaultValues={authorData}
                id={selectAuthId}
                setId={setSelectAuthId}
                name="bookAuthors"
              />
              <Select
                errors={errors}
                label="Categories"
                options={selectCategories}
                setOptions={setSelectCategories}
                defaultValues={catagoriesData}
                id={selectCatId}
                setId={setSelectCatId}
                name="categories"
              />
              <InputForm
                id="readingTime"
                title="Duration"
                type="number"
                name="readingTime"
                placeholder="Type Duration"
                register={register}
                errors={errors}
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
            {console.log("desc", description)}
            <EditableTextBox
              value={description}
              setValue={setDescription}
              name="shortDesc"
              placeholder={"Type Description"}
            />
          </div>
          <div className="col-span-10 mt-5 ">
            <EditableTextBox
              value={content}
              setValue={setContent}
              name="content"
              placeholder={"Type content"}
            />
          </div>
          {updateBookMutation.isError && (
            <p className="text-red-400">{updateBookMutation.error.message}</p>
          )}
          <button
            className="bg-dreamLabColor2 rounded-md py-2 my-8 flex items-center justify-center gap-x-3"
            type="submit">
            {updateBookMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Save
          </button>
          {console.log(
            "updateBookMutation.isSuccess: ",
            updateBookMutation.isSuccess
          )}
          {updateBookMutation.isSuccess && (
            <p className="text-green-600">Edit request sent successfully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EditBook;
