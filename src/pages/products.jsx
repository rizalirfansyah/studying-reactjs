import Button from "../components/Elements/Button/index";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic corporis, consequuntur ea voluptatum non.",
    price: "Rp.1.000.000",
    image: "/images/shoes.jpg",
  },
  {
    id: 2,
    name: "Sepatu Anyar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "Rp.5.000.000",
    image: "/images/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end px-9 h-20 items-center bg-blue-600 text-white">
        {email}
        <Button classname="ml-5 bg-red-500" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
