import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking as updateBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCheckingIn, mutate: checkInBooking } = useMutation({
    // MUTATION FN ONLY ACCEPTS ONE ARGUMENT NEED AN OBJECT FOR MULTIME ARGUMENTS
    mutationFn: ({ bookingId, breakfast }) =>
      updateBookingApi(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    // Passing data from updateBookingApi function to onSuccess
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} succesfully cheked in`, {
        position: "top-right",
      });
      // To refetch data and rerender component
      // Invalidate ALL querys
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/");
    },
    onError: (err) => toast.error(err.message, { position: "top-right" }),
  });

  return {
    isCheckingIn,
    checkInBooking,
  };
};
