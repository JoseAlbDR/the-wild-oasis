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
    onError: (error) => {
      console.error("ERROR", error);
      toast.error("Provide email or passowrd are incorrect", {
        position: "top-right",
      });
    },
  });

  return { isLoginIn, login };
};
