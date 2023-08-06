import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const { isLoading: isSigningIn, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: ({ user }) => {
      toast.success(
        `User ${user.user_metadata.fullname} successfully created, Please verify the new account in user email address`,
        { position: "top-right" }
      );
    },
    onError: (error) =>
      toast.error(`Error creating user: ${error.message}`, {
        position: "top-right",
      }),
  });

  return { isSigningIn, signup };
};
