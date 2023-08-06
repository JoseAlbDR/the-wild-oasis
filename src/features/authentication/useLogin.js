import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLoginIn, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ user }) => {
      queryClient.setQueriesData(["user"], user);
      toast.success(`User ${user.email} successfully logged in`, {
        position: "top-right",
      });
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("ERROR", error);
      toast.error("Provided email or password are incorrect", {
        position: "top-right",
      });
    },
  });

  return { isLoginIn, login };
};
