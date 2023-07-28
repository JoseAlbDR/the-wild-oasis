import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";

function UpdateSettingsForm() {
  const { isLoading, settings, isError } = useSettings();

  if (!settings) return;

  const {
    breakfastPrice,
    maxBookingLength,
    maxGuestPerCabin,
    minBookingLength,
  } = settings;

  function handleUpdate() {}

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          disabled={isLoading}
          defaultValue={minBookingLength}
          type="number"
          id="min-nights"
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          disabled={isLoading}
          defaultValue={maxBookingLength}
          type="number"
          id="max-nights"
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isLoading}
          defaultValue={maxGuestPerCabin}
          type="number"
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          disabled={isLoading}
          defaultValue={breakfastPrice}
          type="number"
          id="breakfast-price"
        />
      </FormRow>
      <button onClick={handleUpdate}>Update</button>
    </Form>
  );
}

export default UpdateSettingsForm;
