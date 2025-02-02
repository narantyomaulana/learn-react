import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" text="Login to your account" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};
export default LoginPage;
