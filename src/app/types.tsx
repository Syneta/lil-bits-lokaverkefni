export type Provision = {
	id: string
	name: string
	description: string
	imageSource: string
	price: number
	category: string

}

export type Drink = Provision & {
	brewer: string
}

export type Dish = Provision & {
	cousine: string
}

export type Order = {
	id: number
	email: string
	dish: Dish
	drinks: Drink[]
	count: number
	date: Date
}

export type ApiDish = {
    idMeal: string,
    strMeal: string,
    strInstructions: string,
    strMealThumb: string,
}

export type ApiDrink = {
    idDrink: string,
    strDrink: string,
    strInstructions: string,
    strDrinkThumb: string,
}