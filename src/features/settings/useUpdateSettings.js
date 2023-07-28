import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting succesfully updated", { position: "top-right" });
      // To refetch data and rerender component
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return {
    isUpdating,
    updateSetting,
  };
};
