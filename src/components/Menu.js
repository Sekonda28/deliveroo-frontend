import Meals from "./Meals";
const Menu = ({ items }) => {
  return (
    <div className="menu">
      <h2>{items.mealType}</h2>
      <div className="menu-items">
        {items.meals.map((info, index) => {
          return (
            <Meals
              key={info.id}
              title={info.title}
              price={info.price}
              description={info.description}
              picture={info.picture}
              popular={info.popular}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
