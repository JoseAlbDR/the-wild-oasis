import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { isLoginIn, login } = useLogin();

  function onSubmit(user) {
    if (!user) return;
    login(user, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email address">
        <Input
          disabled={isLoginIn}
          type="email"
          id="email"
          value="test@test.com"
          autoComplete="username"
          {...register("email")}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          disabled={isLoginIn}
          type="password"
          id="password"
          value="testmenow"
          autoComplete="current-password"
          {...register("password")}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">{!isLoginIn ? "Login" : <SpinnerMini />}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
