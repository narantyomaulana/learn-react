import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    image: "/images/shoes-2.jpg",
    price: "Rp. 1.000.000",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
    laboriosam. Rem assumenda ea perferendis nesciunt! Sunt a voluptates
    praesentium, atque itaque vitae, et reiciendis minus ipsum, asperiores
    adipisci ab ea`,
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    image: "/images/shoes-2.jpg",
    price: "Rp. 1.500.000",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
    laboriosam. Rem assumenda ea perferendis nesciunt! Sunt a voluptates`,
  },
  {
    id: 3,
    name: "Sepatu Vans",
    image: "/images/shoes-2.jpg",
    price: "Rp. 800.000",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
    laboriosam. Rem assumenda ea perferendis nesciunt! Sunt a voluptates
    praesentium, atque itaque vitae, et reiciendis minus ipsum, asperiores
    adipisci ab ea`,
  },

];

function ProductsPage() {
  return (
    <div className="flex justify-center py-6">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
}

export default ProductsPage;
