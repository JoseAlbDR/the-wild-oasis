import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdateCabin as addUpdateCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: addUpdateCabinApi,
    onSuccess: () => {
      toast.success("Cabin succesfully created", { position: "top-right" });
      // To refetch data and rerender component
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return {
    isCreating,
    createCabin,
  };
};
