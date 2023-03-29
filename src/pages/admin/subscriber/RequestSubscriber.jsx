import React, { useEffect, useState } from "react";
import { useGetUserSubscription } from "../../../hooks/useSubscribers";
import UserDetails from "./UserDetails";
import { ClipLoader } from "react-spinners";
import Pagination from "../../../components/admin/Pagination";
import RequestSidebar from "./RequestSidebar";

const RequestSubscriber = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, isError, isSuccess, refetch } =
    useGetUserSubscription("p", currentPage);
  const [pageCount, setPageCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleRefreshData = () => {
    refetch();
  };

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
      <Pagination handlePageChange={handlePageChange} pageCount={pageCount} />
      {isSidebarOpen ? (
        <RequestSidebar
          setIsSidebarOpen={setIsSidebarOpen}
          userDetails={userDetails}
          handleRefreshData={handleRefreshData}
        />
      ) : null}
    </section>
  );
};

export default RequestSubscriber;
