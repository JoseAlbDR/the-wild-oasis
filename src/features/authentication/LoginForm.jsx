import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";
function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { isLoginIn, login } = useLogin();

  function onSubmit(user) {
    login(user, { onSuccess: reset });
  }

  if (isLoginIn) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          {...register("email")}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password")}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
