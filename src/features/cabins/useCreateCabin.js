import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin as addEditCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: addEditCabinApi,
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
