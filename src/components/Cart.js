const Cart = ({panier, setPanier}) => {
  return (
    <div className="cart">
      <div className="cart-card">
        <button onClick = {()=>{
            console.log (panier)}}
        className="cart-disabled">Validar mon panier</button>
      

        <div className="cart-empty">Votre panir est vide</div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
