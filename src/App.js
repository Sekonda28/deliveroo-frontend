import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0.00)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-matt.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Header
        name={data.restaurant.name}
        picture={data.restaurant.picture}
        description={data.restaurant.description}
      />

      <div className="main-content container">
        <div className="menu-container">
          {data.categories.map((category, index) => {
            return (
              category.meals.length > 0 && (
                <Menu
                  items={{
                    mealType: category.name,
                    meals: category.meals,
                  }}
                  panier={panier}
                  setPanier={setPanier}
                  total = {total}
                  setTotal = {setTotal}
                  key={index}
                />
              )
            );
          })}
        </div>
        <Cart
          panier={panier}
          setPanier={setPanier}
          total = {total}
          setTotal = {setTotal}
        />
      </div>
    </div>
  );
};
export default App;
