const Meals = (props) => {
  return (
    <div className="menu-item">
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
