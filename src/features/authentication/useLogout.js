import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLogingOut, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      toast.success("Successfully logged out", { position: "top-right" });
      queryClient.removeQueries();
    },
  });

  return { isLogingOut, logout };
};
