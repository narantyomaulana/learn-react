import Button from "../Elements/Button";
import Input from "../Elements/Input";

const FormLogin = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = "/products";
  }

  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};
export default FormLogin;
