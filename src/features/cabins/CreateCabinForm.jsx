import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  // First part get register and handleSubmit from hook
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("Cabin succesfully created");
      // To refetch data and rerender component
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // Second part use our own onSubmit
  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.name?.message} label="Name">
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capcity shouuld be at least 1.",
            },
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capcity shouuld be at least 1.",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description for cabin">
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
