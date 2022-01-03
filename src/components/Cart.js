import BasketItems from "./BasketItems";

const Cart = ({ panier, setPanier, total, setTotal }) => {
  return (
    <div className="cart">
      <div className="cart-card">
        <button
          onClick={() => {
            alert("Desolé, la fonctionnalité de paiement n'est pas encore fait !");
          }}
          className={panier.length === 0 ? "cart-disabled" : "cart-inherit"}
        >
          Validar mon panier
        </button>

        {panier.length === 0 ? (
          <div className="cart-empty">Votre panir est vide</div>
        ) : (
          <div className="cart-container">
            {panier.map((order, index) => {
              return (
                <BasketItems
                  key={index}
                  index = {index}
                  title={order.title}
                  price={order.price * order.quantity}
                  quantity={order.quantity}
                  total={total}
                  setTotal={setTotal}
                  panier={panier}
                  setPanier= {setPanier}
                />
              );
            })}
            <div className="results">
              <div className="result-line">
                <span className="result-name">Sous-total</span>
                <span className="result-amount">{total.toFixed(2)} €</span>
              </div>
              <div className="result-line">
                <span className="result-name">Frais de livraison</span>
                <span className="result-amount">2.50 €</span>
              </div>
            </div>
            <div className="result-total">
              <span className="result-name">Total</span>
              <span className="result-amount">{(total + 2.50).toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
