import Button from "../components/Elements/Button/index";
import CardProduct from "../components/Fragments/CardProduct";

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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
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
};

export default ProductPage;
