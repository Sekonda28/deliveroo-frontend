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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-matt.herokuapp.com/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement..."</span>
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
            console.log(category.meals);
            return (
              category.meals.length > 0 && (
                <Menu
                  items={{
                    mealType: category.name,
                    meals: category.meals,
                  }}
                />
              )
            );
          })}
        </div>

        <Cart />
      </div>
    </div>
  );
};
export default App;
