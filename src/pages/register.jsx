
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" text="Register to create an account" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};
export default RegisterPage;
