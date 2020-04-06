import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import RestoHeader from "./components/RestoHeader";
import Meal from "./components/Meal";
import Basket from "./components/Basket";
import "./reset.css";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // to fetch = aller chercher en anglais...declaration de fonction
    const fetchData = async () => {
      const response = await axios.get(
        "https://julie-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      //la page est chargée
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log("cart ==>", cart);

  return (
    <>
      {isLoading === true ? (
        <p> Encours de chargement ...</p>
      ) : (
        <>
          <Header />
          <RestoHeader
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />

          <main className="d-flex container">
            <div>
              {data.categories.map((category, i) => {
                return (
                  <div key={i}>
                    {data.categories.length !== 0 && (
                      <h2>{data.categories[i].name}</h2>
                    )}

                    {/* mettre le wrap au dessus du .map !!!!!!!!! */}
                    <ul className="wrap d-flex">
                      {data.categories[i].meals.map((meal, j) => {
                        return (
                          <li key={meal.id}>
                            <Meal {...meal} cart={cart} setCart={setCart} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <aside>
              <Basket cart={cart} setCart={setCart} />
            </aside>
          </main>
        </>
      )}
    </>
  );
}

export default App;
