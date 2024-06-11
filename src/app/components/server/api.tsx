'use client'
import { DishCard, DrinkCard } from '../card';
import { Dish, Drink, OrderType, ApiDish, ApiDrink } from '../../types';

const urlMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z';
//const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const FetchMeal = async (url: string) => {
    try {
        const response = await fetch(urlMeal);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const FetchDrink = async (url: string) => {
    try {
        const response = await fetch(urlDrink);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export const RenderDrink = async () => {
    try {
        const drink = await FetchDrink(urlDrink);
        const drinkData = drink.drinks;

        console.log('Drink:', drink);

        return (
            <div>
                {drinkData.map((item: ApiDrink) => (
                    <DrinkCard 
                        idDrink={item.idDrink}
                        strDrink={item.strDrink}
                        strCategory={item.strCategory}
                        strArea={item.strArea}
                        strDrinkThumb={item.strDrinkThumb}
                    />
                ))}
            </div>
        );
    } catch (error: any) {
        console.error('Error:', error);
        throw new Error(`Error fetching data from ${urlDrink}: ${error.message}`);
    }
}

export const RenderDish = async () => {
    try {
        const meal = await FetchMeal(urlMeal);
        const mealData = meal.meals;

        console.log('Meal:', meal);

        return (
            <div className='border-2 border-black p-2'>
                {mealData.map((item: ApiDish) => (
                    <DishCard
                    idMeal={item.idMeal}
                    strMeal={item.strMeal}
                    strArea={item.strArea}
                    strMealThumb={item.strMealThumb}
                    strCategory={item.strCategory}
                    />
                ))}
            </div>
        );
    } catch (error: any) {
        console.error('Error:', error);
        throw new Error(`Error fetching data from ${urlMeal}: ${error.message}`);
    }
}

/*
const RenderDrinkAndMeal = async () => {
    try {
        const meal = await FetchMeal(urlMeal);
        const drink = await FetchDrink(urlDrink);

        const mealData = meal.meals;
        const drinkData = drink.drinks;

        console.log('Meal:', meal);
        console.log('Drink:', drink);

        return (
            <>
                <div>
                    {mealData.map((item: ApiDish) => (
                        <div key={item.idMeal}>
                            <h2>{item.strMeal}</h2>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            <p>{item.strInstructions}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {drinkData.map((item: ApiDrink) => (
                        <div key={item.idDrink}>
                            <h2>{item.strDrink}</h2>
                            <img src={item.strDrinkThumb} alt={item.strDrink} />
                            <p>{item.strInstructions}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    } catch (error: any) {
        console.error('Error:', error);
        throw new Error(`Error fetching data from ${urlMeal} / ${urlDrink}: ${error.message}`);
    }
}
export default RenderDrinkAndMeal;
*/