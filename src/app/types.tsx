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

export type OrderType = {
	id: string
	email: string
	dish: Dish
	drinks: Drink[]
	count: number
	date: Date
}

export type ApiDish = {
    idMeal: string,
    strMeal: string,
    strArea: string,
    strMealThumb: string,
	strCategory: string,
}

export type ApiDrink = {
    idDrink: string,
    strDrink: string,
    strCategory: string,
    strArea: string,
    strDrinkThumb: string,
}

export type NextButtonProps = {
    pageName: string,
    name: string
}