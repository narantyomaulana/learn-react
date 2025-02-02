import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, text, type } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">{text}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

// Conditional rendering for navigation
function Navigation({ type }) {
  if (type === "login") {
    return (
      <p className="text-center text-sm py-4 px-3">
        Dont Have any Account? {" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-sm py-4 px-3">
        Already have an Account? {" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    );
  }
}

export default AuthLayouts;
