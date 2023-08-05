import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCheckingOut, mutate: checkOutBooking } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checket out`, {
        position: "top-right",
      }),
        queryClient.invalidateQueries({
          active: true,
        }),
        navigate("/");
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return { isCheckingOut, checkOutBooking };
};
