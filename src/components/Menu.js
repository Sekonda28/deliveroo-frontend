import Meals from "./Meals";

const Menu = ({ items, panier, setPanier }) => {

  return (
    <div className="menu-container">
      <div className="menu">
        <h2>{items.mealType}</h2>
        <div className="menu-items">
          {items.meals.map((info, index) => {
            return (
              <Meals
                key={index}
                id={info.id}
                title={info.title}
                price={info.price}
                description={info.description}
                picture={info.picture}
                popular={info.popular}
                panier = {panier}
                setPanier= {setPanier}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
