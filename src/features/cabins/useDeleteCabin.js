import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

const useDelete = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    // If succeed, invalidate cabin query to refetch the data and rerender component
    onSuccess: () => {
      toast.success("Cabin successfully deleted", { position: "top-right" });
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return {
    isDeleting,
    deleteCabin: mutate,
  };
};

export default useDelete;
