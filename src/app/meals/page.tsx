'use client'
import { NextButton } from "../components/button";
import { Order } from "../order";
import { DishCard } from "../components/card";
import { ApiDish } from "../types";
import { useEffect, useState } from "react";

const fetchMeal = async (url: string) => {
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

const urlMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function MealsPage() {
    const [meal, setMeal] = useState<ApiDish[] | null>(null as ApiDish[] | null);

    useEffect(() => {
        const getMeal = async () => {
            try {
                const mealData = await fetchMeal(urlMeal);
                setMeal(mealData.meals);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getMeal();
    }, []);
    
    if (!meal) {
        return <h2>...Loading</h2>; // or any other fallback UI
    }

    return (
        <div className="border-2 border-black p-2">
            <NextButton pageName="date" name="Choose time and date" />
            {(meal as Array<ApiDish>).map((item) => (
                <DishCard
                    key={item.idMeal}
                    idMeal={item.idMeal}
                    strMeal={item.strMeal}
                    strArea={item.strArea}
                    strMealThumb={item.strMealThumb}
                    strCategory={item.strCategory}
                />
            ))}
        </div>
    );
};


