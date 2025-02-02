import Button from "../Elements/Button";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header(props) {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-6 rounded-t-lg" />
    </a>
  );
}

function Body(props) {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tigh text-white mb-3">
          {name}
        </h5>
        <p className="text-sm text-gray-400">{children}</p>
      </a>
    </div>
  );
}

function Footer(props) {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="text-2xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
}

// Nested Components

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
