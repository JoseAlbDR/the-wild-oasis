import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { isLoading: isLogingOut, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Successfully logged out", { position: "top-right" });
      queryClient.removeQueries();
    },
  });

  return { isLogingOut, logout };
};
