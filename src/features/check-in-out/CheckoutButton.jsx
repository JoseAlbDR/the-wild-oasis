import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
import SpinnerMini from "../../ui/SpinnerMini";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkOutBooking } = useCheckout();

  function handleCheckout() {
    checkOutBooking(bookingId);
  }

  if (isCheckingOut) return <SpinnerMini />;

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
