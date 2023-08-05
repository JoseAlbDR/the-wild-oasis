import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkOutBooking } = useCheckout();

  function handleCheckout() {
    checkOutBooking(bookingId);
  }

  return (
    <Button
      disabled={isCheckingOut}
      onClick={handleCheckout}
      variation="primary"
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
