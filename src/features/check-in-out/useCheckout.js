import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export const useCheckout = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingOut, mutate: checkOutBooking } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checket out`, {
        position: "top-right",
      });
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return { isCheckingOut, checkOutBooking };
};
