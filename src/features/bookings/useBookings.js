import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : // Instead of passing 1 object we can pass an array of objects to add more filters
        { field: "status", value: filterValue, method: "eq" };

  const {
    isLoading,
    data: bookings,
    error: isError,
  } = useQuery({
    // Add filter, so whenever filter changes react query will refetch the data AWESOME
    // DEPENDENCY ARRAY LIKE USE EFFECT
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, isError };
};
