const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button
      className={`px-4 py-2 text-white ${classname} rounded font-semibold`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;