import Button from "../components/Elements/Button/index";
import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
          corporis, consequuntur ea voluptatum non.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.000.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
          corporis, consequuntur ea voluptatum non.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
