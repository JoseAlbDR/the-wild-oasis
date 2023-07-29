import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdateCabin as addUpdateCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export const useUpdateCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => addUpdateCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin succesfully edited", { position: "top-right" });
      // To refetch data and rerender component
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return {
    isUpdating,
    updateCabin,
  };
};
