import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useGetUser = () => {
  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoadingUser,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
};