"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import exp from "constants";
import { NextButton } from "../components/button";
import { Order } from "../order";
import { ApiDrink } from "../types";
import { DrinkCard } from "../components/card";

// move logic and rendering form renderdrink to here, keeps track of selected drinks
// create another state to keep track of the selected drinks/ids
// create onclick so that when nextbutton is pressed, update the context

// step 7: when doing the redo flow, check context if drink is already selected
const fetchDrink = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
const urlDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";
export default function DrinkPage() {
    const [drink, setDrink] = useState(null);

    useEffect(() => {
        const getDrink = async () => {
            try {
                const drinkData = await fetchDrink(urlDrink);
                setDrink(drinkData.drinks);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getDrink();
    }, []);

    if (!drink) {
        return <p>Loading ...</p>;
    }

    return (
        <div>
            <NextButton pageName="meals" name="Choose meal" />
            {(drink as Array<ApiDrink>).map((item) => (
                <DrinkCard
                    key={item.idDrink}
                    idDrink={item.idDrink}
                    strDrink={item.strDrink}
                    strCategory={item.strCategory}
                    strArea={item.strArea}
                    strDrinkThumb={item.strDrinkThumb}
                />
            ))}
        </div>
    );
}
/*
  return (
    <div>

      <RenderDrink />
    </div>
  );
}
*/