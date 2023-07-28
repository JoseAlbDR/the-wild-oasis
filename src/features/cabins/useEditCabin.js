import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin as addEditCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export const useEditCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => addEditCabinApi(newCabinData, id),
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
    isEditing,
    editCabin,
  };
};
