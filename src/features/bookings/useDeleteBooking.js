import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully deleted`, {
        position: "top-right",
      });
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate("/bookings");
    },
    onError: (error) => toast.error(error, { position: "top-right" }),
  });

  return { isDeleting, deleteBooking };
};
