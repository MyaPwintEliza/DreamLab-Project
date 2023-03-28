import React, { useEffect, useState } from "react";
import { useGetBooks } from "../../../hooks/useBooks";
import BookItem from "./BookItems";
import { ClipLoader } from "react-spinners";
import Select from "react-select";
import { useBookAuthorsData } from "../../../hooks/useAuthors";

const sortingOptions = [
  { value: "l", label: "Latest" },
  { value: "o", label: "Oldest" },
  { value: "a", label: "A-Z" },
];

const statusOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "a",
    label: "Active",
  },
  {
    value: "p",
    label: "Pending",
  },
];
const pricingOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "0",
    label: "Premium",
  },
  {
    value: "1",
    label: "Free",
  },
];

const BookIndex = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sorting, setSorting] = useState({ value: "l", label: "Latest" });
  const [status, setStatus] = useState({ value: "", label: "All" });
  const [author, setAuthor] = useState({ value: "", label: "All" });
  const [authorOptions, setAuthorOptions] = useState([
    { value: "", label: "All" },
  ]);
  const [isFree, setIsFree] = useState({ value: "", label: "All" });

  const {
    isLoading: authorLoading,
    data: authors,
    isSuccess: authorSuccess,
  } = useBookAuthorsData();

  const {
    data: books,
    isLoading,
    isSuccess,
  } = useGetBooks(
    "",
    search,
    status.value,
    author.value,
    isFree.value,
    sorting.value
  );


  const handleSortingChange = (selectedOption) => {
    setSorting(selectedOption);
  };

  const handleStatusChange = (selectedOption) => {
    setStatus(selectedOption);
  };

  const handleAuthorChange = (selectedOption) => {
    setAuthor(selectedOption);
  };

  const handlePricingChange = (selectedOption) => {
    setIsFree(selectedOption);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  useEffect(() => {
    if (authorSuccess && isSuccess) {
      handleAuthorOptions();
    }
  }, [authorSuccess, isSuccess]);

  const handleAuthorOptions = () => {
    const authorsOptions = authors.map((author) => {
      return { value: author.id, label: author.name };
    });

    setAuthorOptions([{ value: "", label: "All Authors" }, ...authorsOptions]);
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-between font-poppins mb-8">
        <h2 className="text-2xl font-bold text-textColor1">Uploaded Books</h2>
          <span>Create Book</span>
      </header>
      {isLoading || authorLoading ? (
        <div className="col-span-12 mt-8 flex justify-center items-center">
          <ClipLoader size={32} />
        </div>
      ) : (
        <section>
          <ul className="grid grid-cols-12 gap-4 ">
            <Select
              className="col-span-2"
              defaultValue={sorting}
              options={sortingOptions}
              onChange={handleSortingChange}
            />
            <Select
              className="col-span-2"
              defaultValue={status}
              options={statusOptions}
              onChange={handleStatusChange}
            />
            <Select
              className="col-span-2"
              defaultValue={author}
              options={authorOptions}
              onChange={handleAuthorChange}
            />
            <Select
              className="col-span-2"
              defaultValue={isFree}
              options={pricingOptions}
              onChange={handlePricingChange}
            />
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="border  focus:outline-none focus:border-black grid-cols-4 rounded h-full px-2"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </ul>
          <ul>
            {books.items.map((book, index) => (
              <BookItem key={book.slug} book={book} number={index + 1} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default BookIndex;