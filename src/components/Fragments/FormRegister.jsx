import Button from "../Elements/Button";
import Input from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <Input
        label="Fullname"
        type="text"
        placeholder="Input your fullname"
        name="name"
      />
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
      <Input
        label="Password Confirmation"
        type="password"
        placeholder="********"
        name="password_confirmation"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
