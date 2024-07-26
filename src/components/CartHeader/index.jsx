import "./style.scss";

const CartHeader = () => {
  return (
    <header className="cart-header">
      <div className="cart-header__title">найменування</div>
      <div className="cart-header__count">кількість</div>
      <div className="cart-header__cost">вартість</div>
    </header>
  );
};

export default CartHeader;
