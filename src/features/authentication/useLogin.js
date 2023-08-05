import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const { isLoading: isLoginIn, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ user: { email } }) => {
      toast.success(`User ${email} successfully logged in`, {
        position: "top-right",
      });
      navigate("/dashboard");
    },
    onError: (error) => toast.error(error.message, { position: "top-right" }),
  });

  return { isLoginIn, login };
};
