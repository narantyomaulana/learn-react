import Label from "./Label";
import InputForm from "./InputForm";

const Input = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <InputForm name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
