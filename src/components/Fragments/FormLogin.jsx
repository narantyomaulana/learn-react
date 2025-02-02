import Button from "../Elements/Button";
import Input from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <Input
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
