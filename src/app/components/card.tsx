import React from 'react';
import { ApiDish, ApiDrink } from '../types';


export const DishCard: React.FC<ApiDish> = ({ idMeal, strArea, strMeal, strMealThumb, strCategory }) => {
    return (
        <div key={idMeal} className="flex flex-col border-3 border-black rounded-sm p-1 bg-slate-300 w-min text-nowrap">
            <h2>{strMeal}</h2>
            <img src={strMealThumb} width={200} height={200} />
            <h2>Type: {strCategory}</h2>
            <h3>{strArea} cousine</h3>
        </div>
    );
};

export const DrinkCard: React.FC<ApiDrink> = ({ idDrink, strArea, strDrink, strCategory, strDrinkThumb }) => {
    return (
        <div className='flex gap-2'>
            <div key={idDrink} className="border-3 border-black rounded-sm p-1 bg-slate-300 w-min">
                <h2>{strDrink}</h2>
                <img src={strDrinkThumb} width={200} height={200} />
                <h3 className='text-nowrap'>{strCategory} from {strArea}</h3>
            </div>
        </div>
    );
};

