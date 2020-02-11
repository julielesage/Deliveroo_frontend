import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import RestoHeader from "./components/RestoHeader";
import Meal from "./components/Meal";
import Panier from "./components/Panier";
import "./reset.css";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let command = false;

  useEffect(() => {
    // to fetch = aller chercher en anglais...declaration de fonction
    const fetchData = async () => {
      const response = await axios.get(
        "https://julie-deliveroo-backend.herokuapp.com/"
      );
      // remplace le data vide par le data de la response d'axios
      setData(response.data);
      //la page est chargée
      setIsLoading(false);
    };
    //appel de la fonction a ne pas oublier
    fetchData();
    //tableau vide car pour charger le composant initial
  }, []);

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
                  <>
                    <h2>{data.categories[i].name}</h2>

                    {/* mettre le wrap au dessus du .map !!!!!!!!! */}
                    <ul className="wrap d-flex">
                      {data.categories[i].meals.map((meal, j) => {
                        const short = data.categories[i].meals[j];

                        return (
                          <>
                            <Meal
                              key={short.id}
                              title={short.title}
                              description={short.description}
                              price={short.price}
                              picture={short.picture}
                              popular={short.popular}
                              onClick={() => {
                                command = true;
                              }}
                            />
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
            <aside>
              <Panier command={command} />
            </aside>
          </main>
        </>
      )}
    </>
  );
}

export default App;
