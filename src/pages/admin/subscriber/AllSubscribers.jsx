import React, { useEffect, useState } from "react";
import { useGetUserSubscription } from "../../../hooks/useSubscribers";
import { ClipLoader } from "react-spinners";
import Pagination from "../../../components/admin/Pagination";
import UserDetails from "./UserDetails";
import DetailsSidebar from "./DetailsSidebar";
const AllSubscriber = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, isError, isSuccess, refetch } =
    useGetUserSubscription("", currentPage);
  const [pageCount, setPageCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (isSuccess) {
      setPageCount(data.meta.totalPages);
    }
  }, [isSuccess]);

  useEffect(() => {
    refetch(["", currentPage]);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="flex flex-col pb-12">
      {isLoading ? (
        <div className="col-span-12 mt-8 flex justify-center items-center">
          <ClipLoader size={32} />
        </div>
      ) : null}
      {!isLoading && !isError
        ? data.items.map((subscriber) => (
            <UserDetails
              subscriber={subscriber}
              key={subscriber.id}
              setUserDetails={setUserDetails}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))
        : null}

      <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
      {isSidebarOpen ? (
        <DetailsSidebar
          setIsSidebarOpen={setIsSidebarOpen}
          userDetails={userDetails}
        />
      ) : null}
    </section>
  );
};

export default AllSubscriber;
