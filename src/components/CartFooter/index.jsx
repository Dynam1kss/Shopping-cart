import "./style.scss";

const CartFooter = ({ total }) => {
  const { count, price } = total;

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} одиниць</div>
      <div className="cart-footer__price">{price} грн.</div>
    </footer>
  );
};

export default CartFooter;
