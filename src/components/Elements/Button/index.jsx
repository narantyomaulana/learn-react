const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`px-4 py-2 text-white ${classname} rounded font-semibold`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
