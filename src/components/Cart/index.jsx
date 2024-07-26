import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data";

const Cart = () => {
  console.log(data);

  return (
    <section className="cart">
      <CartHeader />
      <Product />
      <CartFooter />
    </section>
  );
};

export default Cart;
