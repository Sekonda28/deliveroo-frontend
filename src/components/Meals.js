

const Meals = (props) => {

  return (
    <div
      className="menu-item"
      onClick={() => {
        const newPanier = [...props.panier];

        const checkId = (obj) => obj.id === props.id;
        const price = parseFloat(props.price)
        console.log(typeof(price))
        if (newPanier.some(checkId) === false) {
  
          newPanier.push({
            title: props.title,
            price: price,
            id: props.id,
            quantity: 1,
          });  props.setPanier(newPanier);

        props.setTotal(props.total + (price))
        }
      



  
        console.log(newPanier);
      }}
    >
      <div className="menu-card">
        <div className="menu-text">
          <h3>{props.title}</h3>
          <p className="description">{props.description}</p>
          <div className="menu-info">
            <p className="price">{props.price}€</p>
            {props.popular && (
              <p className="popular">
                <i className="fas fa-star"></i> Popular
              </p>
            )}
          </div>
        </div>

        {props.picture && <img src={props.picture} alt="meal" />}
      </div>
    </div>
  );
};

export default Meals;
