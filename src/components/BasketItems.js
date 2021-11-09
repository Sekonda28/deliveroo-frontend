const BasketItems = ({ title, price, total }) => {
  return (
  
      <div className="cart-items">
      <div className = "cart-line">
      <div className = "cart-counter">
        C
      </div> 
       <span className = "cart-item-name">{title}</span>
        <span className = "cart-amount">{price} €</span>

      </div>
    </div>
  );
};

export default BasketItems;
