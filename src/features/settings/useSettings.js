import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useSettings = () => {
  const {
    isLoading,
    data: settings,
    isError,
  } = useQuery({
    // Identifies each data
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return {
    isLoading,
    settings,
    isError,
  };
};
