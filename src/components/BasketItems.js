const BasketItems = ({
  title,
  price,
  index,
  quantity,
  panier,
  setPanier,
  setTotal,
  total,
}) => {
  const handlePlus = () => {
    const newTab = [...panier];
    newTab[index]["quantity"] = newTab[index]["quantity"] + 1;
    setPanier(newTab);
    setTotal(total + newTab[index]["price"]);
  };

  const handleMinus = () => {
    const newTab = [...panier];
    newTab[index]["quantity"] = newTab[index]["quantity"] - 1;

    if (newTab[index]["quantity"] === 0) {
      setTotal(total - newTab[index]["price"]);
      newTab.splice(index, 1);
      setPanier(newTab);
    } else {
      setTotal(total - newTab[index]["price"]);
      setPanier(newTab);
    }
  };

  return (
    <div className="cart-items">
      <div className="cart-line">
        <div className="cart-counter">
          <span className = "counter-button" onClick={handleMinus}>
            <i className="fas fa-minus"></i>
          </span>

          <span className= "counter-button">{quantity}</span>
          <span className = "counter-button" onClick={handlePlus}>
            <i className="fas fa-plus"></i>
          </span>
        </div>
        <span className="cart-item-name">{title}</span>
        <span className="cart-amount">{price} €</span>
      </div>
    </div>
  );
};

export default BasketItems;
